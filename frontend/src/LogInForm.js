import React, { useState } from "react";
import { useHistory } from "react-router-dom";



const LogInForm = ({ login }) => {
    const initialState = {
        username: '',
        password: ''
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

    async function handleSubmit (e) {
        e.preventDefault();
        await login(formData);
        setFormData(initialState)
        history.push('/');
    };

    return (
        <div className="LogInForm">
            <div className="LogInForm-form">
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
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LogInForm;