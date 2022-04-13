import React, { useState, useEffect } from "react"
import axios from "axios"
import { QuestionForm } from "./QuestionForm";
// import { Link, Navigate } from 'react-router-dom'


//All Questions List
export const QuestionList = ({token}) => {
  const [questions, setQuestions] = useState([]);


useEffect(() => {
    axios
      .get("https://dj-questionbox.herokuapp.com/api/question", {
        headers: {Authorization: `Token ${token}`}
      })
      .then((response) => {
        console.log(response)
        // setAuth(username, response.data.auth_token);
        setQuestions(response.data);
      })
  }, [token]);

  if (!questions) return null;


    return (
    <div className="homeDiv">
      {questions.map((question, id) => 
        <div questionId={id}>
          {question.user}
          {question.question}
          {/* {question.created_at} */}
          
        </div>
      )}
    </div>
)}