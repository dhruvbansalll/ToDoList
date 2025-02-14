import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const MyAccount = () => {
    const [user, setUser] = useState({ email: "", name: "", date: "" });
    let history = useHistory();

    if (localStorage.getItem('TypeItLoggedIn') === 'true');
    else history.push("/login");

    const getUser = async () => {
        const url = "https://typeitapp.herokuapp.com/api/auth/getUser";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('TypeItToken')
            }
        });
        const json = await response.json();
        if (json.success === true) setUser({ name: json.user.name, email: json.user.email, date: json.user.date });
        else alert("Unauthorized request");
    }
    useEffect(() => { getUser(); }, [])

    const logOut = () => {
        localStorage.setItem('TypeItToken', "")
        localStorage.setItem('TypeItLoggedIn', false);
        console.log("logout :", localStorage.getItem('TypeItLoggedIn'));
        history.push("/login");
    }

    const deleteAccount = async () => {
        const url = "https://typeitapp.herokuapp.com/api/auth/deleteAccount";
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('TypeItToken')
            }
        });
        const json = await response.json();
        if (json.success === true) {
            logOut();
            history.push("/signup");
            alert(json.user.name + ", your account and all associated data has been deleted");
        } else
            alert("Unauthorized request");
    }

    return (
        <div className="container" style={{ maxWidth: "30vw", minWidth: "400px", padding: "30px 40px", marginTop: '15vh', borderRadius: "1em", backgroundColor: '#212529', borderColor: '#212529' }}>
            <h2 className='mb-3' style={{ width: '100%', color: 'white' }}>My Account</h2>
            <form>
                <div className="row mb-3" style={{ color: 'white' }}>
                    <label htmlFor="userName" className="col-sm-3 col-form-label">Name</label>
                    <div className="col-sm-9">
                        <input disabled={true} inputMode="false" type="text" className="form-control" id="userName" value={user.name} />
                    </div>
                </div>
                <div className="row mb-3" style={{ color: 'white' }}>
                    <label htmlFor="userEmail" className="col-sm-3 col-form-label">Email</label>
                    <div className="col-sm-9">
                        <input disabled={true} type="email" className="form-control" id="userEmail" value={user.email} />
                    </div>
                </div>
                <div className="row" style={{ color: 'white' }}>
                    <label htmlFor="userDate" className="col-sm-3 col-form-label" style={{ paddingRight: '0px' }}>User Since</label>
                    <div className="col-sm-9">
                        <input disabled={true} type="text" className="form-control" id="inputPassword3" value={user.date} />
                    </div>
                </div>
                <div className="btn-toolbar" style={{ color: 'white' }}>
                    <button type="submit" className="btn btn-primary mt-4 mb-0 col-sm-4" onClick={logOut} >Log Out</button>
                    <div style={{ flex: "0 0 auto", width: "8.33%" }}></div>
                    <button type="submit" className="btn btn-danger mt-4 mb-0 col-sm-7" onClick={deleteAccount} style={{}} >Delete Account</button>
                </div>
            </form >
        </div >
    )
}

export default MyAccount