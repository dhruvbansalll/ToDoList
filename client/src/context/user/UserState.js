import UserContext from "./UserContext";
import { useState } from "react";

const UserState = (props) => {
    const host = "https://typeitapp.herokuapp.com/api/auth";
    const [user, setUser] = useState({ name: "John Doe", email: "johndoe@gmail.com", date: "12:00:00 AM, Sun Jan 1 0001" });
    const [authToken, setAuthToken] = useState('');

    //createAccount
    const createAccount = async (name, email, password) => {
        const d = new Date();
        const date = d.toLocaleTimeString() + ", " + d.toDateString();
        const url = host + "/createAccount";
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, email: email, password: password, date: date })
        });
        const token = await response.json();
        setAuthToken(token);
        setUser({ name: name, email: email, date: date });
    }

    //user login
    const login = async (email, password) => {
        const url = host + "/login/";
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const json = await response.json();
        setAuthToken(json.token);
        getUser(authToken);
    }

    //Get User
    const getUser = async (token) => {
        const url = host + "/getUser/";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        });
        const json = await response.json();
        setUser({ name: json.name, email: json.email, date: json.date });
    }

    return (
        <UserContext.Provider value={{ authToken, user, createAccount, login, getUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;