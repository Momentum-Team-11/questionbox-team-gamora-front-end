// import React from "react";
// import axios from "axios";

// export const getRequests = ({token}) => {
    
//     const AllQuestions ='https://dj-questionbox.herokuapp.com/api/question/';
//     const AllAnswers ='https://dj-questionbox.herokuapp.com/api/answer';
//     const AllUserQuestions ='https://dj-questionbox.herokuapp.com/api/user_q_list';
//     const AllUserFavQuestions ='https://dj-questionbox.herokuapp.com/api/user_favorited_q_list';
//     const AllUserAnswers ='https://dj-questionbox.herokuapp.com/api/user_a_list';
//     const AllUserAcceptedAnswers ='https://dj-questionbox.herokuapp.com/api/user_accepted_a_list';
//     const AllUserAcceptedFavoritedAnswers ='https://dj-questionbox.herokuapp.com/api/user_a_favorited_a_list';

//     const reqAllQuestions = axios.get(AllQuestions, {
//         headers: {Authorization: `Token ${token}`}
//         });
//     const reqAllAnswers = axios.get(AllAnswers, {
//         headers: {Authorization: `Token ${token}`}
//         });
//     const reqAllUserQuestions = axios.get(AllUserQuestions, {
//         headers: {Authorization: `Token ${token}`}
//         });
//     const reqAllUserFavQuestions = axios.get(AllUserFavQuestions, {
//         headers: {Authorization: `Token ${token}`}
//         });
//     const reqAllUserAnswers = axios.get(AllUserAnswers, {
//         headers: {Authorization: `Token ${token}`}
//         });
//     const reqAllUserAcceptedAnswers = axios.get(AllUserAcceptedAnswers, {
//         headers: {Authorization: `Token ${token}`}
//         });
//     const reqAllUserAcceptedFavoritedAnswers = axios.get(AllUserAcceptedFavoritedAnswers, {
//         headers: {Authorization: `Token ${token}`}
//         });

//     axios
//     .all([
//         reqAllQuestions,
//         reqAllAnswers,
//         reqAllUserQuestions,
//         reqAllUserFavQuestions,
//         reqAllUserAnswers,
//         reqAllUserAcceptedAnswers,
//         reqAllUserAcceptedFavoritedAnswers
//     ])
//     .then(
//     axios.spread((...responses) => {
//         const resAllQuestions = responses[0];
//         const resAllAnswers = responses[1];
//         const resAllUserQuestions = responses[2];
//         const resAllUserFavQuestions = responses[3];
//         const resAllUserAnswers = responses[4];
//         const resAllUserAcceptedAnswers = responses[5];
//         const resAllUserAcceptedFavoritedAnswers = responses[6];

//         console.log(resAllQuestions, resAllAnswers, resAllUserQuestions, resAllUserFavQuestions, resAllUserAnswers, resAllUserAcceptedAnswers, resAllUserAcceptedFavoritedAnswers);
//         console.log({AllUserAnswers});
//     })
//     )
//     .catch(errors => {
//             // react on errors.
//         console.error(errors);
//     })
// }