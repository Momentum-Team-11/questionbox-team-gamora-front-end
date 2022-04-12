// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { QuestionList } from "./QuestionList";
// //import Answer component
// //import AnswerForm component

// export const QuestionDetails = ({ selected, token, baseURL, isLoggedin, questionid }) => {
//     const [question, setQuestion] = useState({})
//     const [answer, setAnswer] = useState('');

//     useEffect(() => {
//     axios
//         .get(`https://dj-questionbox.herokuapp.com/api/question/${question.pk}`)
//         .then((response) =>
//             setQuestion(response.data));
//     }, [selected, baseURL, question.pk]);

//     const handleChange = (event) => {
//     if (event.target.name === 'answer') {
//         setAnswer(event.target.value)
//         }
//     }

//     // const submitAnswer = async () => {
//     // return await axios
//     // .post(`https://dj-questionbox.herokuapp.com/api/question/${question.pk}/answers`, {
//     //     "response": answer,
//     // }, {
//     //     headers: {'Authorization': `Token ${token}`, 'isLoggedin':`${isLoggedin}`}
//     // })
    
//     // }

//     return (
//     <>
//     <QuestionList 
//     question={question}
//     questionid={questionid}
//     />
//       {/* show answer question form */}
//     <div>
//         {/* <label htmlFor="Answer">Answer</label>
//         <textarea
//         placeholder="Answer Away!"
//         type="text"
//         name="answer"
//         value={answer}
//         onChange={(e) => handleChange(e)}
//         />
//         <button onClick={submitAnswer}>Submit</button> */}
//     </div>

//       {/* show list of answers */}
//     {/* {question.answers?.map((answer) => {
//         console.log(answer);
//         return <div>answer</div>;
//     })} */}
//     </>
//     );
// };


















// // // import React, { useEffect, useState } from 'react'
// // // import axios from 'axios'
// // // import { Link, useLocation } from 'react-router-dom'
// // // import { Question } from './Question'

// // // export const QuestionList = ({ question, token, user, url, setSelected, isLoggedin }) => {
// // //     const baseURL = "https://dj-questionbox.herokuapp.com/api"
// // //     const [questions, setQuestions] = useState([]);
// // //     const location = useLocation()


// // //     useEffect(() => {
// // //     const questionsList = async () => {
// // //         await axios
// // //         .get(baseURL + "/question", {
// // //     }
// // //         ,{
// // //             headers: {
// // //             'Authorization': `Token ${token}, isLoggedin ${isLoggedin}`
// // //             }
// // //             }) 
// // //         .then((response) =>
// // //             (response.data));
// // //     };
// // //     questionsList();
// // //     }, []);


// // //     // return (
// // //     //     <div>
// // //     //     {questions.map((question) => {
// // //     //         return (
// // //     //             <Question
// // //     //             key={question.pk}
// // //     //             question={question}
// // //     //             user={isLoggedin}
// // //     //             setSelected={setSelected}
// // //     //             baseURL={baseURL}
// // //     //             />
// // //     //         )
// // //     //     }
// // //     //         )}
// // //     //     </div>
// // //     // )
// // // }


















// // // // import React from "react";
// // // // import axios from "axios";
// // // // import {useEffect, useState } from "react";
// // // // import { Question } from "../components/Question";
// // // // import { Answer } from "../components/Answer";
// // // // import { Link } from 'react-router-dom';


// // // // export const QuestionList = ({token, answer}) => {
// // // //     const [questions, setQuestions] = useState([]);
// // // //     // const [questionUser, setQuestionUser] = useState([]);


// // // //     useEffect(() => {
// // // //         axios
// // // //         .get("https://dj-questionbox.herokuapp.com/api/question", {
// // // //             headers: {Authorization: `token ${token}`}
// // // //         })
// // // //         .then((response) => {
// // // //             console.log(response)
// // // //             setQuestions(response.data)
// // // //         })
// // // //     },[token])

// // // //     return (
// // // //         <div className="questionList">
// // // //         <h1>this is a list of questions</h1>
// // // //         {questions.map((question, id, user, createdAt, answer) => {
// // // //             return (
// // // //             <div key={user} className="questionListDiv">

// // // //                 <Question
// // // //                 question={question}
// // // //                 id={id}
// // // //                 user={user}
// // // //                 createdAt={createdAt}
// // // //                 answer={answer}
// // // //                 key={id}
// // // //                 />
// // // //             </div>
// // // //             )}
// // // //         )}
// // // //                 <li><Link to="newquestion">new question</Link></li>
// // // //         </div>
