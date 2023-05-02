import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import "./FormStyles.css";

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
        <div className="form-container">
            <h2>Log In</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input 
                    type="username"
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
                <Button color="primary">Submit</Button>
            </Form>
        </div>
    )
}

export default LogInForm;