import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams, useNavigate, Navigate } from 'react-router-dom';

export const Delete = ({ token, username, questionId }) => {
    const navigate = useNavigate;
    const params = useParams();
    const [question, setQuestion] = useState(null);
    const [answers, setAnswers] = useState('');
    const [error, setError] = useState('');
    const [isSubmit, setSubmit] = useState(false);

    const handleDelete = (event) => {
    console.log("connected");
    event.preventDefault();
    console.log(question, answers)
    axios
    .delete(`https://dj-questionbox.herokuapp.com/api/question/${questionId}/answers`, {
        headers: {Authorization: `Token ${token}`},
    },
    )
    .then((response) => {
        console.log(response.data);
        setSubmit(true);
        console.log(isSubmit)
        return navigate('/');
    })
    .catch((e) => setError(e.message));
    };

    if (!token) return <Navigate to='/' />;

    if (isSubmit) {
        console.log("Submitted!")
        return <Navigate to='/userquestions' />}
    
    
    return (
            <>
        <div className="questionForm">

            <h2>delete</h2>
            <form onSubmit={handleDelete}>
                <h3>{question.title}</h3>
                <h4>{question.user}'s question:</h4>
                <h2>{question.question}</h2>

                <br></br>
                <button onClick={handleDelete} type='submit'>Submit!</button>
            </form>
            )
            )
        </div>
        </>
        )}



