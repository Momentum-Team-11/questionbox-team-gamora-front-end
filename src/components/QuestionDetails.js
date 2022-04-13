import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { QuestionList } from "./QuestionList";
import { Navigate} from 'react-router-dom'
// import { QuestionList } from "./QuestionList";
// import { AnswerList } from "./AnswerList";

export const QuestionDetails = ({ token }) => {
    const [question, setQuestion] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [isSubmit, setSubmit] = useState(false);
    const {questionId} = useParams();
    // const params = useParams();
    // const [questionText, setQuestionText] = useState();

    useEffect(() => {
    axios
    .get(`https://dj-questionbox.herokuapp.com/api/question/${questionId}/answers`, {
        headers: {Authorization: `Token ${token}`},
    },)
    .then((response) => {
        setQuestion(response.data)
        // setAnswer(response.data.answers)
        console.log(response.data.answers)
    })
    }, [questionId, token])

    const handleChange = (event) => {
        if (event.target.name === 'answer') {
            setAnswer(event.target.value)
        }
    }

    const submitAnswer = () => {
        axios
        .post('https://dj-questionbox.herokuapp.com/api/user_a_list', {
            answer: answer,
        }, {
            headers: {Authorization: `Token ${token}`},
        })}

        if (isSubmit) {
            console.log("Submitted!")
            return <Navigate to='/useranswers' />
            }

    return (
        <>
    <QuestionList question={question} />
      {/* show answer question form */}
      <div>
        <label htmlFor="Answer">Answer</label>
        <textarea
          placeholder="Answer Away!"
          type="text"
          name="answer"
          value={answer}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={submitAnswer}>Submit</button>
      </div>

      {/* show list of answers */}
      {question.answer_list?.map((answer) => {
        console.log(answer);
        return <div>answer</div>;
      })}
    </>
    )
}





    // <>
    //     {question && (
    // <>
    // <div className="questionDetails" id={questionId}>
    //     <QuestionList
    //     {...user}
    //     {...question}
    //     {...created_at} />
    // </div>

    // <div className="answersDiv">

    //     {answers.map((answer, id) =>
    //     <div className="answerMap" id={answer.id}>
    //         {answer.user}
    //         {answer.answer}
    //     </div>
    //     )}
    // </div>
    // </>
    //     )}
    // </>
