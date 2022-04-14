import { Navigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

export const AnswerForm = ({ token }) => {

    const [answer, setAnswer] = useState("");
    // const [error, setError] = useState("");
    const [isSubmit, setSubmit] = useState(false);

    const handleAnswer = (error) => {
    error.preventDefault();
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
            console.log(isSubmit)
        })
        // .catch((error) => setError(error.message))
    }

    const handleSubmit = (inputType, error) => {
        if (inputType === 'answerText') {
            setSubmit(error.target.value)
        }
    }

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
            onChange={(error) => handleSubmit('answerText', error)}
        />
        < button color="primary" type='submit'>Submit!</button>
    </form>
    </div>
    );
}