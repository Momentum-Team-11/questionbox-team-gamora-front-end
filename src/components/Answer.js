import React from "react"

export const Answer = ({ answer }) => {
    return (
        <div className="questionDiv">
            {answer.id}
            {answer.answer}
            {answer.answeredAt}
            {answer.favorited}
        </div>
    )
}