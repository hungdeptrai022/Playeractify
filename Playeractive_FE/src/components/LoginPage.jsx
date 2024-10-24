import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsAuthenticated}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () =>{
        setIsAuthenticated(true);
        navigate('/');
    };

    return(
        <div>
            <h2>Login Page</h2>
            <input 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>

        </div>
    )
}

export default LoginPage;