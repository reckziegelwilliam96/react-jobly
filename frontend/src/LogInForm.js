import React from "react";

const LogInForm = ({postUser}) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        postUser(formData);
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
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LogInForm;