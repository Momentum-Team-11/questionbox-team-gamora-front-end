import React from "react";
import axios from "axios";
import {useEffect, useState } from "react";
import { Question } from "../components/Question";
import { Answer } from "../components/Answer";
import { Link } from 'react-router-dom';


export const QuestionList = ({token, answer}) => {
    const [questions, setQuestions] = useState([]);
    // const [questionUser, setQuestionUser] = useState([]);


    useEffect(() => {
        axios
        .get("https://dj-questionbox.herokuapp.com/api/question", {
            headers: {Authorization: `token ${token}`}
        })
        .then((response) => {
            console.log(response)
            setQuestions(response.data)
        })
    },[token])

    return (
        <div className="questionList">
        <h1>this is a list of questions</h1>
        {questions.map((question, id, user, createdAt, answer) => {
            return (
            <div key={user} className="questionListDiv">

                <Question
                question={question}
                id={id}
                user={user}
                createdAt={createdAt}
                answer={answer}
                key={id}
                />
            </div>
            )}
        )}
                <li><Link to="newquestion">new question</Link></li>
        </div>
    )
    }
