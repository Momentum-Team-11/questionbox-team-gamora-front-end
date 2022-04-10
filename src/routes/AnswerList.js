import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Answer } from "../components/Answer";


export default function AnswerList({token}) {
    // const [questions, setQuestions] = useState([]);
    // const [questionUser, setQuestionUser] = useState([]);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        axios
        .get("https://dj-questionbox.herokuapp.com/api/answer", {
            headers: {Authorization: `token ${token}`}
        })
        .then((response) => {
            console.log(response)
            setAnswers(response.data)
        })
    },[token])

    return (
        <div className="answerList">
        <h1>this is a list of answers</h1>
        {answers.map((answer, id, answeredAt) => {
            return (
                <Answer
                answer={answer}
                id={id}
                answeredAt={answeredAt}
                />
            )}
        )}
        </div>
    )
}