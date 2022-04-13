import { Navigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

export const QuestionForm = ({ token, isLoggedIn }) => {

    // const qFormURL = "https://dj-questionbox.herokuapp.com/api/user_q_list";
    const [question, setQuestion] = useState("");
    const [user, setUser] = useState("");
    const [error, setError] = useState("");
    const [isSubmit, setSubmit] = useState(false);

    const handleSubmit= (e) => {
    console.log("making post");
    e.preventDefault();
    setError("");
    console.log(question, user);
        axios
        .post("https://dj-questionbox.herokuapp.com/api/user_q_list", 
        {
            question: question,
            user: user,
        },
        {
            headers: {Authorization: `Token ${token}`},
        })
        .then((res) => {
            console.log(res.data);
            setSubmit(true);
            console.log(isSubmit)
        })
        .catch((e) => setError(e.message))
    }

    if (isLoggedIn) {
    return <Navigate to='/' />
    }

    if (isSubmit) {
    console.log("Submitted!")
    return <Navigate to='/userquestions' />
    }

    return (
    <div className="questionForm">

    <h2>New Box!</h2>
        {error && <div className="error">{error}</div>}
    <form onSubmit={handleSubmit}>
        
          <label htmlFor='questionUser'>Username: </label>
          <input
            type='text'
            className='text-input'
            id='user'
            required
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <br></br>
          <label htmlFor='question'>Your Question: </label>
          <textarea
            type='question'
            className='question'
            placeholder='rocks go here'
            required
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          < button color="primary" type='submit'>Submit!</button>
      </form>
    </div>
  );
}























// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import { Navigate } from 'react-router-dom'

// export const QuestionForm = ({ token }) => {
//     const newQFormURL = "https://dj-questionbox.herokuapp.com/api/user_q_list";
//     const [question, setQuestion] = useState("");
//     const [user, setUser] = useState("");
//     const [error, setError] = useState("");

//     const handleSubmitQ = () => {
//         error.preventDefault();
//         setError('');
//     axios
//     .post(newQFormURL, {
//         question: question,
//         user: user,
//     },
//     // { headers: {Authorization: `Token ${token}`}
//     // }
//     )
//     .then((response) => {
//         console.log(response.data)
//     // setUser('')
//     // setQuestion('')
//     //     return response
//     })
//     // .catch((e) => setError(e.message));
//     if (error) {
//         return error;
//     } else {
//         console.log('submitted!');
//     }
//     };

// if (!token) return <Navigate to="/" />;



//     const handleChange = (inputType, event) => {
//         // event.preventDefault();
//         if (inputType === 'question') {
//             setQuestion(event.target.value)
//         }
//         if (inputType === 'user') {
//             setUser(event.target.value)
//         }
//     }

//   // const handleChange = (event) => {
//   //   if (event.target.name === 'newQ') {
//   //     console.log("question changed");
//   //     setNewQ(event.target.value);
//   //   }
//   //   if (event.target.name === 'user') {
//   //     console.log("question user");
//   //     setUser(event.target.value)
//   //   }
//   // }

//     return (
//     <div className="newQFormDiv">
//             {error && <div className="error">{error}</div>}
//         <form className="newQForm" onSubmit={handleSubmitQ}>

//         <div>
//             <label className="formLabel" htmlFor="question">Question</label>
//             <textarea
//             name="newQ"
//             id="question"
//             type="text"
//             placeholder="Question"
//             value={question}
//             onChange={(event) => setQuestion(event.target.value)}
//             />
//         </div>

//         <div>
//             <label className="formLabel" htmlFor="user">User</label>
//             <input
//             name="user"
//             id="user"
//             type="text" 
//             placeholder="User"
//             value={user}
//             onChange={(event) => setUser(event.target.value)}
//             />
//         </div>

//         <button type="submit">Submit</button>

//         </form>

//         </div>
//     );
// }