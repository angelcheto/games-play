import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialValues = { email: '', password: '', conPassword: '' };

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        if (values.password !== values.conPassword) {
            return setError('Password does not match!');
            
        }

        try {
            await register(values.email, values.password)
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

    return (


        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={values.email}
                        onChange={changeHandler}
                        placeholder="maria@email.com"
                        autoComplete="email"
                    />

                    <label htmlFor="Password">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="register-password"
                        value={values.password}
                        onChange={changeHandler}
                        autoComplete="new-password"
                    />

                    <label htmlFor="conPassword">Confirm Password:</label>
                    <input 
                        type="password" 
                        name="conPassword" 
                        id="conPassword"
                        value={values.conPassword}
                        onChange={changeHandler}
                        autoComplete="new-password"
                    />

                    {error && (
                    <p>
                        <span style={{fontSize: '18px', color: 'red'}}>{error}</span>
                    </p>                        
                    )}

                    <input className="btn submit" type="submit" value="Register"/>

                    <p style={{ marginTop: '30px' }}>
                        <span style={{ fontSize: '18px', color: 'white', backgroundColor: 'gray', padding: '10px', borderRadius: '15px', borderColor: 'black' }}>
                            If you already have a profile, click<Link to="/login" style={{ color: 'white', textDecoration: 'underline' }}>here.</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>

    );
}