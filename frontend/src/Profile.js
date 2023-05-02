import React, { useState, useContext, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import JoblyApi from "./api";
import { AuthContext, UserContext } from "./UserContext";
import "./FormStyles.css"

const Profile = () => {
    const { token } = useContext(AuthContext);
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        password: "",
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    JoblyApi.token = token;
    let updatedUser = await JoblyApi.updateUser({username: currentUser.username, updatedData: formData});
    setCurrentUser(updatedUser);
    alert("Profile updated successfully.");
  };

  return (
    <div className="form-container">
      <h2>Edit Profile</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="password">Confirm password to make changes</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
        </FormGroup>
        <Button color="success">Save Changes</Button>
      </Form>
    </div>
  );
};

export default Profile;
