import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" })
    let history = useHistory();

    if(localStorage.getItem('TypeItLoggedIn') === 'true') history.push("/");

    const userLogin = async (event) => {
        event.preventDefault();
        const url = "https://typeitapp.herokuapp.com/api/auth/login/";
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email, password: user.password })
        });
        const json = await response.json();
        if (json.success === true) {
            // Save the auth token and redirect
            localStorage.setItem('TypeItToken', json.token);
            localStorage.setItem('TypeItLoggedIn', true);
            history.push("/");
        } else {
            alert("Invalid credentials");
        }
    }

    const onChange = (event1) => {
        setUser({ ...user, [event1.target.name]: event1.target.value });
    }
    //name[email], id[email] and the object name[email:] must be same

    return (
        <div className="container" style={{ maxWidth: "30vw", minWidth: "400px", padding: "30px 40px", marginTop: '15vh', borderRadius: "1em", backgroundColor: '#212529', borderColor: '#212529' }}>
            <h2 className='mb-3' style={{ width: '100%', color: 'white' }}>TypeIt</h2>
            <form onSubmit={userLogin}>
                <div className="form-floating mb-3">
                    <input autoComplete='off' className="form-control" id="email" name="email" value={user.email} placeholder="name@example.com" type="email" onChange={onChange} style={{ height: 'calc(3rem + 2px)' }} />
                    <label htmlFor="userEmail" style={{ padding: '0.72rem 0.75rem' }}>Email address</label>
                </div>
                <div className="form-floating">
                    <input className="form-control" id="password" name="password" value={user.password} placeholder="Password" type="password" onChange={onChange} style={{ height: 'calc(3rem + 2px)' }} />
                    <label htmlFor="userPassword" style={{ padding: '0.72rem 0.75rem' }}>Password</label>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" id="login" name="login" className="btn btn-primary mt-4 mb-0" >Log In</button>
                </div>
            </form >
        </div >
    )
}

export default Login
