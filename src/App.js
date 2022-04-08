import React from "react";
// import axios from "axios";
import useLocalStorageState from "use-local-storage-state";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from "./components/Login";
import { QuestionList } from "./components/QuestionList";

// login token: "11b22b7796e3c1c7079b074c46a0cc137ce8b412"

import './App.css';

const App = () => {
    // const baseURL = "https://dj-questionbox.herokuapp.com/api";
    const [username, setUsername] = useLocalStorageState('questionBoxAdmin', '');
    const [token, setToken] = useLocalStorageState('questionBoxToken', '');

    const setAuth = (username, token) => {
        setToken(token)
        setUsername(username)
    }

    const isLoggedin = username && token

    // return (
    //     <div className="plzjustwork">
    //         <Login
    //         setAuth={setAuth}
    //         isLoggedIn={isLoggedin}
    //         />
    //     </div>
    // )

    return (
        <Router>
            <Routes>
                <Route path="/" element={<QuestionList token={token} />} />
                {/* <Route path="questions" elements={<QuestionList token={token} />} />
                <Route path="questions/:questionId" element={<QuestionList token={token} />} /> */}
                <Route path="login" element={<Login setAuth={setAuth} isLoggedin={isLoggedin} />}/>
            </Routes>
        </Router>
    )
};

export default App;