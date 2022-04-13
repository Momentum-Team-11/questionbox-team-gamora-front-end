// import React from "react";
// import axios from "axios";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { getTheQuestions } from "../api";

// export const Home = () => {
//     const questions = getTheQuestions();

//     return (
//         <div>
//             <h1>Questions</h1>
//             <nav>
//                 <ul>
//                     {questions.map(({ questionId, questions }) => (
//                         <li key={questionId}>
//                             <Link to={`question/${questionId}/answers`}>{questions}</Link>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//         </div>
//     )
// }