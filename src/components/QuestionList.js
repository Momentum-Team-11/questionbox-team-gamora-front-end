// import React from "react";
import axios from "axios";
import {useEffect, useState } from "react";


export const QuestionList = ({token}) => {
    // const baseURL = "https://dj-questionbox.herokuapp.com/api";
    // const listURL = "https://dj-questionbox.herokuapp.com/api/user_question_list"
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
        {/* {questions.map((question, id, createdAt) => {
            return (
                <>
                questions={questions.question}
                id={questions.id}
                createdAt={createdAt}
                </>
            )
        }
        )} */}



        </div>
    )
    }
