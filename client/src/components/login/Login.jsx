import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialValues = { email: '', password: '' };

export default function Login() {
    const [error, setError] = useState('');
    const login = useLogin();
    const navigate = useNavigate();  

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);  
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={values.email}
                        onChange={changeHandler}
                        placeholder="Sokka@gmail.com" 
                        autoComplete="email"
                    />

                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                        autoComplete="current-password"
                    />

                    {error && (
                        <p>
                            <span style={{fontSize: '18px', color: 'red'}}>{error}</span>
                        </p>
                    )}

                    <input type="submit" className="btn submit" value="Login" />

                    <p style={{ marginTop: '30px' }}>
                        <span style={{ fontSize: '18px', color: 'white', backgroundColor: 'gray', padding: '10px', borderRadius: '15px', borderColor: 'black' }}>
                            If you don't have a profile, click<Link to="/register" style={{ color: 'white', textDecoration: 'underline' }}> here.</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}
