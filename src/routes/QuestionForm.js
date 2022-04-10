import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate, Link } from 'react-router-dom'

export default function QuestionForm({ token, createdAt }) {
  const newQFormURL = "https://dj-questionbox.herokuapp.com/api/user_q_list";
  const [newQ, setNewQ] = useState("");
  const [favoritedQ, setFavoritedQ] = useState("");

  const handleSubmitQ = (e) => {
    e.preventDefault()
    axios
    .post(newQFormURL, {
      question: newQ,
      favorited: favoritedQ,
    },
    {
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
    .then(response => {
      setFavoritedQ('')
      setNewQ('')
      return response
    })
  }

  const handleChange = (inputType, event) => {
    if (inputType === 'newQ') {
      setNewQ(event.target.value)
    }
    if (inputType === 'favoritedQ') {
      setFavoritedQ(event.target.value)
    }
  }

    return (
      <div className="newQFormDiv">

        <form className="newQForm" onSubmit={handleSubmitQ}>

          <div>
            <label className="formLabel" htmlFor="question">Question</label>
            <textarea
            className="questionInput"
            id="question"
            type="text"
            placeholder="Question"
            value={newQ}
            onChange={(event) => handleChange('newQ', event)}
            />
          </div>

          <div>
            <label className="formLabel" htmlFor="user">User</label>
            <input
            className="questionInput"
            id="user"
            type="text" 
            placeholder="User"
            // value={}
              // onChange={(event) => handleChange('favoritedQ', event)}
            />
          </div>

          <div>
            <label htmlFor="createdAt">Date</label>
            <input
            className="questionInput"
            id="createdAt"
            type="text"
            placeholder="date uploaded"
            value={createdAt}
            onChange={(event) => handleChange('createdAt', event)}
            />
          </div>

          <div>
            <label htmlFor="favorited">Favorite</label>
            <input id="favorited" />
          </div>

          <button type="submit">Submit</button>

        </form>

        </div>
      );
}