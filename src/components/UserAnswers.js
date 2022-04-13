import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


//User Answers List
export const UserAnswers = ({token}) => {
const [userAnswers, setUserAnswers] = useState([])
const {questionId} = useParams();

useEffect(() => {
    axios
      .get("https://dj-questionbox.herokuapp.com/api/user_a_list", {
        headers: {Authorization: `Token ${token}`},
      })
      .then((response) => {
        console.log(response)
        // setAuth(username, response.data.auth_token);
        setUserAnswers(response.data);
      })
  }, [token]);

  // if (!userAnswers) return null;

    return (
    <div className="homeDiv">
      <h2>This is user's box of rocks</h2>
      {userAnswers.map((answer, key) => 
        <div answerkey={key}>
          {answer.user}
          {answer.answer}
          {/* {answer.answered_at} */}
          {answer.favorited}

        <button>
        <Link to={`/question/${questionId}/answers`}>
        Original Box 
        </Link></button>
        </div>
      )}
    </div>
)}