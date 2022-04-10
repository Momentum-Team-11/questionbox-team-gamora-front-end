import React from "react";
// import axios from "axios";
import useLocalStorageState from "use-local-storage-state";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from "./routes/Login";
import { Logout } from "./routes/Logout";
import { QuestionList } from "./routes/QuestionList";
import AnswerList from "./routes/AnswerList";
import NewQuestion from "./routes/QuestionForm";
import QuestionAnswersList from "./routes/QuestionAnswersList";
import './App.css';
// login token: "11b22b7796e3c1c7079b074c46a0cc137ce8b412"


const App = () => {
    const [username, setUsername] = useLocalStorageState('questionBoxUsername', '');
    const [token, setToken] = useLocalStorageState('questionBoxToken', '');
    const [loggedUserPk, setLoggedUserPk] = useLocalStorageState('questionBoxUserPk', '');


    const getLoggedUserPk = (pk) =>
        setLoggedUserPk(pk)


    const setAuth = (username, token) => {
        setToken(token)
        setUsername(username)
    }

    const isLoggedin = username && token


    return (
        <Router>
            <Routes>
                <Route path="/" element={<QuestionList token={token} />} />
                <Route path="/" element={<AnswerList token={token} />} />
                <Route path="newquestion" element={<NewQuestion token={token} />} />
                <Route path="questions" elements={<QuestionList token={token} />} />
                <Route path="answer" elements={<AnswerList token={token} />} />
                <Route path="question/:questionId" element={<QuestionAnswersList token={token} />} />
                <Route path="answers/:answerId" element={<AnswerList token={token} />} />
                <Route path="login" element={<Login setAuth={setAuth} isLoggedin={isLoggedin} loggedUserPk={loggedUserPk} getLoggedUserPk={getLoggedUserPk} />}/>
                <Route path="logout" element={<Logout setAuth={setAuth} setToken={setToken} setUsername={setUsername} isLoggedIn={isLoggedin} />} />
            </Routes>
        </Router>
    )
};

export default App;