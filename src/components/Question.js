import React from "react"

export const Question = ({ question, user }) => {
    return (
        <div key={user} className="questionDiv">
            {question.id}
            <button>{question.question}</button>
            {question.user}
            {question.createdAt}
            {question.favorited}
        </div>
    )
}