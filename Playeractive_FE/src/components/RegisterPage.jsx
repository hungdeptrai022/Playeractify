import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = ({ setIsAuthenticated}) =>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = ()=>{
        setIsAuthenticated(true);
        navigate('/');
    };

    return(
        <div>
        <h2>Register Page</h2>
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
        <button onClick={handleRegister}>Register</button>

    </div>
    )
}

export default RegisterPage;