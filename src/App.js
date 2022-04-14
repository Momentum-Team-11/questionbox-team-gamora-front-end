import React, { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorageState from "use-local-storage-state";
import { QuestionForm } from "./components/QuestionForm";
import { AnswerForm } from "./components/AnswerForm";
import { QuestionList } from "./components/QuestionList";
import QuestionDetails from "./components/QuestionDetails"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Logout } from "./components/Logout";
import { AnswerList } from "./components/AnswerList" 
import { Profile } from "./components/Profile";
import { UserAnswers } from "./components/UserAnswers";
// import { Delete } from "./components/Delete"


const App = () => {
    const [questions, setQuestions] = useState([]);
    // const [selected, setSelected] = useState(null);
    const [loggedUserPk, setLoggedUserPk] = useLocalStorageState('questionBoxUserPk', '');
    const [token, setToken] = useLocalStorageState('questionBoxToken', '');
    const [username, setUsername] = useLocalStorageState('questionBoxUsername', '');


    const questionURL = "https://dj-questionbox.herokuapp.com/api/question"

    const isLoggedIn = username && token

    const getLoggedUserPk = (pk) =>
    setLoggedUserPk(pk)

    const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
    }


    useEffect(() => {
    const getTheQuestions = () => {
    axios
    .get(questionURL,
        {headers: {Authorization: `Token ${token}`}}
    )
    .then((res) =>
        setQuestions(res.data));
    };
    getTheQuestions();
    }, [token, questions]);


    return (
        <div className="App">

    <Router>

        <Navbar isLoggedIn={isLoggedIn} />

        <Routes>

            <Route
            path="/register"
                element={
                <Register isLoggedIn={isLoggedIn} setAuth={setAuth} />} />

            <Route
            path="/"
                element={
                <QuestionList token={token} />} />

            <Route
            path="home"
                element={
                <QuestionList token={token} />} />

            <Route
            path="questions"
                element={
                <QuestionList token={token} />} />

            <Route
            path="newquestion"
                element={
                <QuestionForm token={token} />} />

            <Route
            path="newanswer"
                element={
                <AnswerForm token={token} />} />

            <Route
            path="answers/*"
                element={
                <AnswerList token={token} />} />

            <Route
            path="profile"
                element={
                <Profile token={token} isLoggedIn={isLoggedIn} />} />

            <Route
            path="useranswers"
                element={
                <UserAnswers token={token} isLoggedIn={isLoggedIn} />}/>

            {/* <Route
            path="delete"
                element={
                <Delete token={token} />} /> */}

            {/* <Route
            path="useracptanswers"
                element={
                <UserAcptAnswers token={token} />}/>

            <Route
            path="userfavquestions"
                element={
                <UserFavQuestions token={token} />}/> */}

            <Route
            path="/question/:questionId/*"
                element={
                <QuestionDetails
                token={token}
                setAuth={setAuth}
                />} />

            <Route
            path="/login"
                element={
                <Login
                setAuth={setAuth}
                isLoggedIn={isLoggedIn}
                loggedUserPk={loggedUserPk}
                getLoggedUserPk={getLoggedUserPk} />} />

            <Route
            path="/logout"
                element={
                <Logout
                setAuth={setAuth}
                setToken={setToken}
                setUsername={setUsername}
                isLoggedIn={isLoggedIn} />} />

    </Routes>
    </Router>

    </div>
)}

export default App;
