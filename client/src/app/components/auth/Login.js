import React from 'react';
import './login.scss';

const Login = () => {
    return (
        <div className='login-container'>
            <h1>Login</h1>

            <div>
                <p>E-mail</p>
                <input type='text' placeholder='e-mail' name='email' id='email' />

                <p>Password</p>
                <input type='password' placeholder='password' name='password' id='password' />

            </div>

            <button>Login</button>
            
        </div>
    );
}

export default Login;