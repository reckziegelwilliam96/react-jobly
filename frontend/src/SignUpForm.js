import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from 'react-router-dom';
import "./FormStyles.css"

const SignUpForm = ({ signup }) => {
    const initialState = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    };
    const [formData, setFormData] = useState(initialState);
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    async function handleSubmit(e) {
      e.preventDefault();
      try {
        await signup(formData, history);
        setFormData(initialState);
      } catch (err) {
        console.error(err);
      }
    }
    

    return (
      <div className="form-container">
        <h2>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input 
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input 
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="firstName">First Name</Label>
            <Input 
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastName">Last Name</Label>
            <Input 
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input 
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
            <Button color="primary">Submit</Button>
          </FormGroup>
        </Form>
      </div>
    )

}

export default SignUpForm;