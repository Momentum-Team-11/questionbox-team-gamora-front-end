import React, { useState, useEffect } from "react";
import axios from "axios";
import useLocalStorageState from "use-local-storage-state";
import { QuestionForm } from "./components/QuestionForm";
import { QuestionList } from "./components/QuestionList";
import { QuestionDetails } from "./components/QuestionDetails"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Logout } from "./components/Logout";
import { AnswerList } from "./components/AnswerList" 
// import { allQuestions } from "./components/GET";
import { UserQuestions } from "./components/UserQuestions";
import { UserAnswers } from "./components/UserAnswers";
import { UserFavQuestions } from "./components/UserFavQuestions";
import { UserAcptAnswers } from "./components/UserAcptAnswers";

const App = () => {
    const [questions, setQuestions] = useState([]);
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    const [selected, setSelected] = useState(null);
    const [loggedUserPk, setLoggedUserPk] = useLocalStorageState('questionBoxUserPk', '');
    const [token, setToken] = useLocalStorageState('questionBoxToken', '');
    const [username, setUsername] = useLocalStorageState('questionBoxUsername', '');

    // const baseURL = "https://dj-questionbox.herokuapp.com/api"
    const questionURL = "https://dj-questionbox.herokuapp.com/api/question"

    const isLoggedIn = username && token

    const getLoggedUserPk = (pk) =>
    setLoggedUserPk(pk)

    const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
    }


    useEffect(() => {
    const getTheQuestions = async () => {
    await axios
        .get(questionURL)
        .then((res) => setQuestions(res.data));
    };
    getTheQuestions();
    }, []);


    return (
        <div className="App">

    <Router>

    <Navbar isLoggedIn={isLoggedIn} />

    <Routes>

    <Route
    path="/register"
        element={<Register isLoggedIn={isLoggedIn} setAuth={setAuth}/>} />

        <Route
        path="/"
            element={
            <QuestionList token={token} />}/>

        <Route
        path="home"
            element={
            <QuestionList token={token} />}/>

        <Route
        path="questions"
            element={
            <QuestionList token={token} />}/>

        <Route
        path="newquestion"
            element={
            <QuestionForm token={token} />}/>

        <Route
        path="answers"
            element={
            <AnswerList token={token} />}/>

        <Route
        path="userquestions"
            element={
            <UserQuestions token={token} />}/>

        <Route
        path="useranswers"
            element={
            <UserAnswers token={token} />}/>

        <Route
        path="useracptanswers"
            element={
            <UserAcptAnswers token={token} />}/>

        <Route
        path="userfavquestions"
            element={
            <UserFavQuestions token={token} />}/>

        {/* <Route
        path="/ask"
            element={
            <QuestionForm token={token} />}/> */}

        {/* <Route
        path="/questions/:questionId"
            element={
            <QuestionDetails
            token={token} />}/> */}

        <Route
        path="/login"
            element={
            <Login setAuth={setAuth}
            isLoggedIn={isLoggedIn}
            loggedUserPk={loggedUserPk}
            getLoggedUserPk={getLoggedUserPk} />}/>

        {/* <Route
        path="/register"
            element={
            <Register isLoggedIn={isLoggedIn} />}/> */}

        <Route
        path="/logout"
            element={
            <Logout
            setAuth={setAuth}
            setToken={setToken}
            setUsername={setUsername}
            isLoggedIn={isLoggedIn} />}/>

        {/* <Route
        path="/my_questions"
            element={
            <UserQuestions
            setAuth={setAuth}
            setToken={setToken}
            setUsername={setUsername}
            isLoggedIn={isLoggedIn} />}/> */}

        {/* <Route
        path="/my_answers"
            element={
            <UserAnswers
            setAuth={setAuth}
            setToken={setToken}
            setUsername={setUsername}
            isLoggedIn={isLoggedIn} />}/> */}

    </Routes>
    </Router>

    </div>
)}

export default App;

















// import React, {useState } from "react";
// // import axios from "axios";
// import useLocalStorageState from "use-local-storage-state";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Login } from "./components/Login";
// import { Logout } from "./components/Logout";
// import { QuestionList } from "./components/QuestionList";
// import './App.css';
// login token: "11b22b7796e3c1c7079b074c46a0cc137ce8b412"


// const App = () => {
//     const [username, setUsername] = useLocalStorageState('questionBoxUsername', '');
//     const [token, setToken] = useLocalStorageState('questionBoxToken', '');
//     const [loggedUserPk, setLoggedUserPk] = useLocalStorageState('questionBoxUserPk', '');
//     const [questions, setQuestions] = useState([]);
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const [selected, setSelected] = useState(null);

//     // const baseURL = "https://dj-questionbox.herokuapp.com/api/"

//     const getLoggedUserPk = (pk) =>
//         setLoggedUserPk(pk)

//     const setAuth = (username, token) => {
//         setToken(token)
//         setUsername(username)
//     }

//     const isLoggedin = username && token





//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<QuestionList token={token} />} />
//                 <Route path="questions" elements={<QuestionList token={token} />} />
//                 <Route path="login" element={<Login setAuth={setAuth} isLoggedin={isLoggedin} loggedUserPk={loggedUserPk} getLoggedUserPk={getLoggedUserPk} />}/>
//                 <Route path="logout" element={<Logout setAuth={setAuth} setToken={setToken} setUsername={setUsername} isLoggedIn={isLoggedin} />} />
//             </Routes>
//         </Router>
//     )
// };

// export default App;