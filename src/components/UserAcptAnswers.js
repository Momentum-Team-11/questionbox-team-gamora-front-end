import React, { useState, useEffect } from "react"
import axios from "axios"


//User Answers List
export const UserAcptAnswers = ({token, user}) => {
const [userAnswers, setUserAnswers] = useState([])

useEffect(() => {
    axios
      .get(`https://dj-questionbox.herokuapp.com/api/user_accepted_a_list`, {
        headers: {Authorization: `Token ${token}`}
      })
      .then((response) => {
        console.log(response)
        // setAuth(username, response.data.auth_token);
        setUserAnswers(response.data);
      })
  }, [token, user]);

  if (!userAnswers) return null;

    return (
    <div className="homeDiv">
      {userAnswers.map((user, id) => 
        <div key={id}>
          {user.answer.user}
          {user.answer}
          {user.answered_at}
          {user.favorited}
        </div>
      )}
    </div>
)}