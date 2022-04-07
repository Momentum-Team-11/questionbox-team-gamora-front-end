import React, { useState, useEffect } from "react";
import axios from "axios";
import { Login } from "./components/Login";
// login token: "11b22b7796e3c1c7079b074c46a0cc137ce8b412"
import Question from "./components/Question";
// import Score from "./components/Score";
import './App.css';

const App = () => {
    return(
        <div className="plzwork">
            <Login />
        </div>
    )
};

export default App;