import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import { QuestionDetails } from './QuestionDetails'
import QuestionForm from "./QuestionForm"

//All Questions List
export const AnswerList = ({token, setAuth, username}) => {
const [answers, setAnswers] = useState([])

useEffect(() => {
    axios
    .get("https://dj-questionbox.herokuapp.com/api/answer/", {
        headers: {Authorization: `Token ${token}`}
    })
    .then((response) => {
        console.log(response)
        // setAuth(username, response.data.auth_token);
        setAnswers(response.data);
      })
  }, [token]);

  if (!answers) return null;

    return (
    <div className="homeDiv">
      {answers.map((answer, key) => 
        <div key={key}>
          {answer.user}
          {answer.answer}
          {answer.created_at}
        </div>
      )}
    </div>
)}