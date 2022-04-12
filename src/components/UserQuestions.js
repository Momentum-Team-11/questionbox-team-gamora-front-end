import React, { useState, useEffect } from "react"
import axios from "axios"


//User Questions List
export const UserQuestions = ({token}) => {
const [userQuestions, setUserQuestions] = useState([])

useEffect(() => {
    axios
      .get("https://dj-questionbox.herokuapp.com/api/user_q_list", {
        headers: {Authorization: `Token ${token}`}
      })
      .then((response) => {
        console.log(response)
        // setAuth(username, response.data.auth_token);
        setUserQuestions(response.data);
      })
  }, [token]);

  if (!userQuestions) return null;

    return (
    <div className="homeDiv">
      {userQuestions.map((question, key) => 
        <div key={key}>
          user={question.user}
          {question.question}
          {question.created_at}
        </div>
      )}
    </div>
)}