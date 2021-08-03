import React, { useState } from 'react';
import './login.scss';
import { useAuth } from '../../services';
import { useHistory } from 'react-router';
import * as Routes from '../../routes';

const Login = () => {

    const { signIn } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let history =  useHistory();

    const handleLogin = async (ev) => {
        ev.preventDefault();
        const user = await signIn(username, password);
        if (user) {
            history.push(Routes.TRAINING);
        };
    };

    return (
        <div className='login-container'>
            <h1>Login</h1>

            <div>
                <p>E-mail or Username</p>
                <input type='text' placeholder='e-mail' name='email' id='email' onChange={(ev) => setUsername(ev.target.value)} />

                <p>Password</p>
                <input type='password' placeholder='password' name='password' id='password' onChange={(ev) => setPassword(ev.target.value)} />

            </div>

            <button onClick={handleLogin}>Login</button>
            
        </div>
    );
}

export default Login;