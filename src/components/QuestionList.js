import React, { useState, useEffect } from "react"
import axios from "axios"
// import { QuestionForm } from "./QuestionForm";
import { Link } from 'react-router-dom'


//All Questions List
export const QuestionList = ({token}) => {
  const [questions, setQuestions] = useState([]);


useEffect(() => {
    axios
      .get("https://dj-questionbox.herokuapp.com/api/question", 
      {headers: {Authorization: `Token ${token}`}}
      )
      .then((response) => {
        console.log(response)
        // setAuth(username, response.data.auth_token);
        setQuestions(response.data);
      })
  }, [token]);

  if (!questions) return null;


    return (
    <div className="homeDiv">
      <h2>This is a box of rocks</h2>
      {questions.map((question, key) => {
        const questionId = question.id;
        const username = question.user;
        return (
      <div firstkey={key}>
          {/* {question.user}
          {question.question} */}
        <div className="favsDiv">
        {question.favorited.length === 0 ? (
          <i // onClick={[handleFavorite, setFavorite(q.pk)]}
            className="star"></i>
    ) : (
        <></>
          )}
        {question.favorited.map((favorited, id) => {
          if (favorited === username) {
            return (
        <span>
        <i //onClick={[handleFavorite, setFavorite(questionId)]}
          className="star"></i>
        </span>
        );
          } else {
          return (
      <i // onClick={[handleFavorite, setFavorite(questionId)]}
        className="star"></i>
        );
        }
      })}
      <div>
        <Link to={`/question/${questionId}/answers`}>
          <h4>{question.question}</h4>
        </Link>
    </div>
        </div>

      </div>
        )
}
      )}
    </div>
)}