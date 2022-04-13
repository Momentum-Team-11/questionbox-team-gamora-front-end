import React, { useState, useEffect } from "react"
import axios from "axios"
// import { QuestionForm } from "./QuestionForm";
import { Link } from 'react-router-dom'



//All Answers List
export const AnswerList = ({token, questionId, question}) => {
  const [answers, setAnswers] = useState([]);

useEffect(() => {
    axios
      .get("https://dj-questionbox.herokuapp.com/api/answer", 
      {headers: {Authorization: `Token ${token}`}}
      )
      .then((response) => {
        console.log(response)
        // setAuth(username, response.data.auth_token);
        setAnswers(response.data);
      })
  }, [token]);

  if (!answers) return null;


    return (
    <div className="homeDiv">

      {answers.map((answer, id, key) => {
        const answerId = answer.id;
        const username = answer.user
        return (
      <div key={id}>
          {answer.user}
          {answer.answer}

      </div>
        )
}
      )}
    </div>
)}































// import React, { useState, useEffect } from "react"
// import axios from "axios"
// import { Link } from 'react-router-dom'
// import { QuestionDetails } from './QuestionDetails'
// import QuestionForm from "./QuestionForm"

// //All Questions List
// export const AnswerList = ({token, setAuth, username, questionId}) => {
// const [answers, setAnswers] = useState([])

// useEffect(() => {
//     axios
//     .get("https://dj-questionbox.herokuapp.com/api/answer", {
//         headers: {Authorization: `Token ${token}`}
//     })
//     .then((response) => {
//         console.log(response)
//         // setAuth(username, response.data.auth_token);
//         setAnswers(response.data);
//       })
//   }, [token]);

//   if (!answers) return null;

//     return (
//     <div className="homeDiv">
//       {answers.map((answer, key) => 
//         <div key={questionId}>
//           {answer.user}
//           <h2>{answer.answer}</h2>
//           {answer.created_at}
//           {answer.id}
//         </div>
//       )}
//     </div>
// )}