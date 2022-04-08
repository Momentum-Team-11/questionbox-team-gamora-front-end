import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// import Questions from "./components/Questions";

export const QuestionList = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios
        .get('https://dj-questionbox.herokuapp.com/api/questions')
        .then((response) => {
            console.log(response.data)
            setQuestions(response.data)
        })
    }, [])

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
