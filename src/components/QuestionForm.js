import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom'

export const QuestionForm = ({ token }) => {
    const newQFormURL = "https://dj-questionbox.herokuapp.com/api/user_q_list/";
    const [newQ, setNewQ] = useState("");
    const [user, setUser] = useState("");
    const [error, setError] = useState("");

    const handleSubmitQ = () => {
        error.preventDefault();
        setError('');
    axios
    .post(newQFormURL, {
        question: newQ,
        user: user,
    },
    { headers: {Authorization: `Token ${token}`}
    })
    .then((response) => {
        console.log(response)
    setUser('')
    setNewQ('')
        return response
    })
    .catch((e) => setError(e.message));
    }

    const handleChange = (inputType, e) => {
        if (inputType === 'newQ') {
            setNewQ(e.target.value)
        }
        if (inputType === 'user') {
            setUser(e.target.value)
        }
    }

  // const handleChange = (event) => {
  //   if (event.target.name === 'newQ') {
  //     console.log("question changed");
  //     setNewQ(event.target.value);
  //   }
  //   if (event.target.name === 'user') {
  //     console.log("question user");
  //     setUser(event.target.value)
  //   }
  // }

    return (
    <div className="newQFormDiv">
            {error && <div className="error">{error}</div>}
        <form className="newQForm" onSubmit={handleSubmitQ}>

        <div>
            <label className="formLabel" htmlFor="question">Question</label>
            <textarea
            name="newQ"
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
            name="user"
            id="user"
            type="text" 
            placeholder="User"
            value={user}
                onChange={(event) => handleChange('user', event)}
            />
        </div>

        {/* <div>
            <label htmlFor="createdAt">Date</label>
            <input
            className="questionInput"
            id="createdAt"
            type="text"
            placeholder="date uploaded"
            value={created_at}
            onChange={(event) => handleChange(event)}
            />
        </div> */}

        {/* <div>
            <label htmlFor="favorited">Favorite</label>
            <input
            id="favorited" 
            type="checkbox"
            />
        </div> */}

        <button type="submit">Submit</button>

        </form>

        {/* <button>
            <Navigate to="questions">Back to all questions</Navigate>
        </button> */}

        </div>
    );
}