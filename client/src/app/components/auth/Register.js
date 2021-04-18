import React from 'react';
import './register.scss';

const Register = () => {
    return (
        <div className='register-container'>
            <h1>Register</h1>

            <div>
                <p>E-mail</p>
                <input type='text' placeholder='e-mail' name='email' id='email' />

                <p>Firstname</p>
                <input type='text' placeholder='firstname' name='firstname' id='firstname' />

                <p>Lastname</p>
                <input type='text' placeholder='lastname' name='lastname' id='lastname' />

                <p>Password</p>
                <input type='password' placeholder='password' name='password' id='password' />

            </div>

            <button>Register</button>
            
        </div>
    );
}

export default Register;