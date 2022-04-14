import React from "react";
import { Navigate } from "react-router-dom";


export const Logout = ({ setAuth, setToken, setUsername, isLoggedIn }) => {

    const setLogout = () => { 
        setUsername(null) 
        setToken(null)
        setAuth("", "")
        console.log(setToken)
    }

    if (!isLoggedIn) {
        return <Navigate to="landing" />
    }

    // if (isLoggedIn) {
    //     return <Navigate to="home" />
    // }

    return (
    <div className="logButt">
        <button onClick={() => setLogout()}>Log out</button>
    </div>
    )
}