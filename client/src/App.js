import './App.css';
import FAQs from './components/FAQs';
import Home from "./components/Home";
import React from 'react';
import About from "./components/About";
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import MyAccount from './components/MyAccount';
import NoteState from './context/note/NoteState';

import {
    BrowserRouter as Router,
    Switch,
    Route
//    Redirect
} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
    return (
        <>
            <NoteState>
                <Router>
                    <Navbar />
                    <div className="pt-3">
                        <div className="container">
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                    {/* {console.log("home :", localStorage.getItem('TypeItLoggedIn')), localStorage.getItem('TypeItLoggedIn') === 'true' ? <Home /> : <Redirect to="/login" />} */}
                                </Route>
                                <Route exact path="/myAccount">
                                    <MyAccount />
                                    {/* {console.log("myaccount :", localStorage.getItem('TypeItLoggedIn')), localStorage.getItem('TypeItLoggedIn') === 'true' ? <MyAccount /> : <Redirect to="/login" />} */}
                                </Route>
                                <Route exact path="/about">
                                    <About />
                                </Route>
                                <Route exact path="/faqs">
                                    <FAQs />
                                </Route>
                                <Route exact path="/login">
                                    <Login />
                                    {/* {console.log("login :", localStorage.getItem('TypeItLoggedIn')), localStorage.getItem('TypeItLoggedIn') === 'true' ? <Redirect to="/" /> : <Login />} */}
                                </Route>
                                <Route exact path="/signup">
                                    <Signup />
                                    {/* {localStorage.getItem('TypeItLoggedIn') === 'true' ? <Redirect to="/" /> : <Signup />} */}
                                </Route>
                            </Switch>
                        </div>
                        <Alert/>
                    </div>
                </Router>
            </NoteState>
        </>
    );
}

export default App;