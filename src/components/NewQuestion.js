import React from "react";
import QuestionForm from "../components/QuestionForm"

export default function NewQuestion({token}) {
    
    return (
        <QuestionForm token={token}/>
    )
}