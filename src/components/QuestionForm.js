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
    return <Navigate to='/profile' />
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
