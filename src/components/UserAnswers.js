import React, { useState, useEffect } from "react"
import axios from "axios"


//User Answers List
export const UserAnswers = ({token}) => {
const [userAnswers, setUserAnswers] = useState([])

useEffect(() => {
    axios
      .get("https://dj-questionbox.herokuapp.com/api/user_a_list", {
        headers: {Authorization: `Token ${token}`}
      })
      .then((response) => {
        console.log(response)
        // setAuth(username, response.data.auth_token);
        setUserAnswers(response.data);
      })
  }, [token]);

  if (!userAnswers) return null;

    return (
    <div className="homeDiv">
      {userAnswers.map((answer, id) => 
        <div key={id}>
          {answer.user}
          {answer.answer}
          {answer.answered_at}
          {answer.favorited}
        </div>
      )}
    </div>
)}