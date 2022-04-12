import React, { useState, useEffect } from "react"
import axios from "axios"


//User Questions List
export const UserFavQuestions = ({token}) => {
const [userFavQuestions, setUserFavQuestions] = useState([])

useEffect(() => {
    axios
      .get("https://dj-questionbox.herokuapp.com/api/user_favorited_q_list", {
        headers: {Authorization: `Token ${token}`}
      })
      .then((response) => {
        console.log(response)
        // setAuth(username, response.data.auth_token);
        setUserFavQuestions(response.data);
      })
  }, [token]);

  if (!userFavQuestions) return null;

    return (
    <div className="homeDiv">
      {userFavQuestions.map((question, id) => 
        <div key={id}>
          {question.user}
          {question.question}
          {question.created_at}
        </div>
      )}
    </div>
)}