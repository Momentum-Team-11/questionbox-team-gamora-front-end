// import React, { useState, useEffect } from "react"
// import axios from "axios"
// import { Link, useParams, useNavigate, Navigate } from 'react-router-dom';
// import { QuestionList } from "./QuestionList";

// export const Delete = ({ token, user, questionId }) => {
//     const navigate = useNavigate;
//     const params = useParams();
//     const [question, setQuestion] = useState(null);
//     const [answers, setAnswers] = useState('');
//     const [error, setError] = useState('');
//     const [isSubmit, setSubmit] = useState(false);


//     const handleDelete = (event) => {
//     console.log("connected");
//     event.preventDefault();
//     console.log(question, answers)
//     axios
//     .delete(`https://dj-questionbox.herokuapp.com/api/question/${questionId}/answers`, {
//         headers: {Authorization: `Token ${token}`},
//     },
//     )
//     .then((response) => {
//         console.log(response.data);
//         setSubmit(true);
//         console.log(isSubmit)
//         return navigate('/');
//     })
//     .catch((e) => setError(e.message));
//     };

//     if (!token) return <Navigate to='/' />;

//     if (isSubmit) {
//         console.log("Deleted!")
//         return <Navigate to='/userquestions' />}
    
    
//     return (
//             <>
//         <div className="questionForm">


//             <h2>delete</h2>
//             <form onSubmit={handleDelete}>
//                 <h3>{question.question}</h3>
//                 <h4>{question.user}'s question:</h4>

//                 <br></br>
//                 <button 
//           className="button button is-primary"
//           onClick={handleDelete}
//         >
//         Delete
//         </button>
//             </form>
//             )
//             )
//         </div>
//         </>
//         )}



