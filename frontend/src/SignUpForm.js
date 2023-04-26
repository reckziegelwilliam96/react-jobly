import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const SignUpForm = ({ postUser }) => {
    const initialState = {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        postUser(formData);
        history.push('/');
    }

    return (
        <div className="SignUpForm">
            <div className="SignUpForm-form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                    type="username"
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
                    <label htmlFor="first_name">First Name</label>
                    <input 
                    type="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    />
                    <label htmlFor="last_name">Last Name</label>
                    <input 
                    type="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )

}

export default SignUpForm;