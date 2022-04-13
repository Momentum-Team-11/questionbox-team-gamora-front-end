import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { QuestionList } from "./QuestionList";
import { AnswerList } from "./AnswerList";

export const QuestionDetails = ({ token, questionId }) => {
    const [question, setQuestion] = useState([]);
    const [answer, setAnswer] = useState([]);
    const params = useParams()
    // const [questionText, setQuestionText] = useState();

    useEffect(() => {
    axios
    .get(`https://dj-questionbox.herokuapp.com/api/question/${params.questionId}/answers`, {
        headers: {Authorization: `Token ${token}`},
    })
    .then((response) => {
        setQuestion(response.data)
        // console.log(response.data)
    })
    }, [params.questionId, token])


    return (
    <>
        {question && (
    <>
    <div>

        <QuestionList
        questionId={question.id}
        />
        {/* <h2>{question.question}</h2>
        {question.id}
        {question.user}
        {question.answer} */}
    </div>

        {/* <div className="answers">
            <label htmlfor="Answer">Answer</label>
            <textarea
            placeholder="Answer!"
            type="text"
            name="answer"
            value={answer}
            onChange={(e) => setAnswer(e)} />
            <button onClick={setAnswer}>Submit</button>
        </div> */}


        {/* {question.answer_list?.map((answer) => {
        console.log(answer)
        return ({answer}
            )})} */}
    </>
        )}
    </>
    )
}
