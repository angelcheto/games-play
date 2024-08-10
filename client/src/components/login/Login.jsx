import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

const initalValues = { email: '', password: '' };

export default function Login() {
    const navigate = useNavigate();  
    const login = useLogin();

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            console.error('Login failed:', err);
            console.log(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = 
    useForm(
        initalValues, 
        loginHandler
    );

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
                    <label htmlFor="login-password">Password:</label>
                    <input 
                        type="password" 
                        id="login-password" 
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                        autoComplete="current-password"
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have a profile, click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}
