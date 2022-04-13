import React from "react";


export const Logout = ({ setAuth, setToken, setUsername }) => {

    const setLogout = () => { 
        setUsername("") 
        setToken("")
        setAuth("", "")
        console.log(setToken)
    }
    
    return (
    <div className="logButt">
        <button onClick={() => setLogout()}>Log out</button>
    </div>
    )
}