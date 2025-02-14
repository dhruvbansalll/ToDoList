import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Signup = () => {
    let history = useHistory();

    if(localStorage.getItem('TypeItLoggedIn') === 'true') history.push("/");

    const [user, setUser] = useState({ userName: "", userEmail: "", userPassword: "", date: "" });

    const onChange = (event) => { setUser({ ...user, [event.target.name]: event.target.value }); }

    const signup = async (event) => {
        event.preventDefault();
        const d = new Date();
        const date = d.toDateString();
        const url = "https://typeitapp.herokuapp.com/api/auth/createAccount";
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: user.userName, email: user.userEmail, password: user.userPassword, date: date })
        });
        const json = await response.json();
        // console.log(json);
        if (json.success === true) {
            // console.log(json);
            // Save the auth token and redirect
            localStorage.setItem('TypeItToken', json.token);
            localStorage.setItem('TypeItLoggedIn', true);
            // console.log('TypeItToken : ', localStorage.getItem('TypeItToken'));
            // console.log('TypeItLoggedIn : ', localStorage.getItem('TypeItLoggedIn'));
            history.push("/");
        } else {
            alert("user already exists");
        }
    }
    return (
        <div className="container" style={{ maxWidth: "30vw", minWidth: "400px", padding: "30px 40px", marginTop: '15vh', borderRadius: "1em", backgroundColor: '#212529', borderColor: '#212529' }}>
            <h2 className='mb-3' style={{ width: '100%', color: 'white' }}>TypeIt</h2>
            <form>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="userName" name="userName" placeholder="Name" aria-label="User name" style={{ height: 'calc(3rem + 2px)' }} onChange={onChange} value={user.userName} />
                    <label htmlFor="floatingNameInput" style={{ padding: '0.72rem 0.75rem' }}>Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="userEmail" name="userEmail" placeholder="name@example.com" aria-label="Email" style={{ height: 'calc(3rem + 2px)' }} onChange={onChange} value={user.userEmail} />
                    <label htmlFor="floatingInput" style={{ padding: '0.72rem 0.75rem' }}>Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="userPassword" name="userPassword" placeholder="Password" aria-label="Password" style={{ height: 'calc(3rem + 2px)' }} onChange={onChange} value={user.userPassword} />
                    <label htmlFor="floatingPassword" style={{ padding: '0.72rem 0.75rem' }}>Password</label>
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary mt-4 mb-0" onClick={signup}>Sign Up</button>
                </div>
            </form >
        </div >
    )
}

export default Signup
