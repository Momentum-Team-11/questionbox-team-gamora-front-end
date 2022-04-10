import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { QuestionList } from './QuestionList';


export default function QuestionAnswerList({ token, loggedUserPk }) {
    let params = useParams()
    const [question, setQuestion] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [answerNumbs, setAnswerNumbs] = useState();
    const [questionText, setQuestionText] = useState();

    useEffect(() => {
        const questionUrl = `https://dj-questionbox.herokuapp.com/api/question/${params.questionId}`
    axios
        .get(questionUrl)
        .then((response) => {
            console.log(response.data)
        })
    }, [params.questionId, questionText])

    return (
        <QuestionList />
    )

}