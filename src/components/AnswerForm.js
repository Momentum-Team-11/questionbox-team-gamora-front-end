import { Navigate} from 'react-router-dom'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const AnswerForm = ({ token }) => {

    const qFormURL = "https://dj-questionbox.herokuapp.com/api/user_q_list";
    const [answer, setAnswer] = useState("");
    const [question, setQuestion] = useState("");
    // const [user, setUser] = useState("");
    const [error, setError] = useState("");
    const [isSubmit, setSubmit] = useState(false);
    const {questionId} = useParams();

    const handleAnswer = (e) => {
    e.preventDefault();
        axios
        .post('https://dj-questionbox.herokuapp.com/api/user_a_list', 
        {
            response: answer,
        },
        {
            headers: {Authorization: `Token ${token}`},
        })
        .then((res) => {
            console.log(res.data)
            setAnswer('')
            // setSubmit(true);
            console.log(isSubmit)
        })
        .catch((e) => setError(e.message))
    }

    const handleSubmit = (inputType, e) => {
        if (inputType === 'answerText') {
            setAnswer(e.target.value)
        }
    }

    // // if (isLoggedIn) {
    // // return <Navigate to='/' />
    // // }

    if (isSubmit) {
    console.log("Submitted!")
    return <Navigate to='/useranswers' />
    }

    return (
    <div className="answerForm">

    <h2>got a new rock for the box?</h2>
        {/* {error && <div className="error">{error}</div>} */}
    <form onSubmit={handleAnswer}>

        <br></br>

        <label htmlFor='answer'></label>
        <textarea
            type='answer'
            className='answer'
            placeholder='rock goes here'
            required
            value={answer}
            onChange={(e) => handleSubmit('answerText', e)}
        />
        < button color="primary" type='submit'>Submit!</button>
    </form>
    </div>
    );
}