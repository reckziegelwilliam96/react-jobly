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
        const user = await signup(formData);
        console.log(user);
        setFormData(initialState);
        history.push('/');
    }

    return (
        <div className="SignUpForm">
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