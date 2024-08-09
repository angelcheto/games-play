import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const initalValues = { email: '', password: '', conPassword: '' };

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

    const { values, changeHandler, submitHandler } = useForm(initalValues, registerHandler);

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
                    onChange={changeHandler

                    }
                    placeholder="maria@email.com"/>

                    <label htmlFor="pass">Password:</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="register-password"
                    value={values.password}
                    onChange={changeHandler}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input 
                    type="password" 
                    name="conPassword" 
                    id="conPassword"
                    value={values.conPassword}
                    onChange={changeHandler}
                    />

                    {error && (
                    <p className="field">
                    <span>{error}</span>
                    </p>                        
                    )}

                    <input className="btn submit" type="submit" value="Register"/>

                    <p>
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>

    );
}