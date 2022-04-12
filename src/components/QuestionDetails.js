import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const QuestionDetails = ({ token, loggedUserPk, selected }) => {
    let params = useParams()
    const [question, setQuestion] = useState([]);
    const [answer, setAnswer] = useState([]);
    // const params = useParams()
    // const [questionText, setQuestionText] = useState();

    useEffect(() => {
    axios
    .get(`https://dj-questionbox.herokuapp.com/api/question/<${params.pk}>/answers`, {
        headers: {Authorization: `Token ${token}`},
    })
    .then((response) => {
        console.log("error")
        setQuestion(response.data)
    }
    )
    
    

    }

    
    )


}
