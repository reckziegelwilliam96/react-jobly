import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const SignUpForm = ({ signup }) => {
    const initialState = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    };
    const [formErrors, setFormErrors] = useState([])
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
            const user = await signup(formData);
            console.log(user);
            setFormData(initialState);
            history.push('/');
          } catch (err) {
            console.error("Registration failed", err)
            setFormErrors(err)
          }
    }

    function renderErrors() {
        return (
          formErrors.length > 0 && (
            <div className="alert alert-danger">
              <ul>
                {formErrors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )
        );
      }

    return (
        <div className="SignUpForm">
            {renderErrors()}
            <div className="SignUpForm-form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    />
                    <label htmlFor="firstName">First Name</label>
                    <input 
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )

}

export default SignUpForm;