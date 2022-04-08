import React from "react"

export const Question = ({ question }) => {
    return (
        <div className="questionDiv">
            {question.id}
            {question.question}
            {question.createdAt}
            {question.favorited}
        </div>
    )
}