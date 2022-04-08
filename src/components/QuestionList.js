import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// import Questions from "./components/Questions";

export const QuestionList = ({ token }) => {
    const [questions, setQuestions] = useState([]);
    const [user, setUser] = useState([]);
    const [questionUsers, setQuestionUsers] = useState([])

    useEffect(() => {
        axios
        .get('https://dj-questionbox.herokuapp.com/api/user_question_list?format=api', {
            headers: {
                Authorization: `token ${token}`,
            },
        })
        .then((response) => {
            const questionUsers = response.data.map((obj) => obj.user)
            setQuestionUsers(questionUsers)
            setQuestions(response.data)
        })
    }, [token])

    return (
        <div className="questionList">
        <h1>this is a list of questions</h1>
            <QuestionList />



        {/* {questions.map((question) => (
            <Questions
            user={question.user}
            id={question.id}/>
        ))} */}
        </div>
    )
}
