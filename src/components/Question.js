import React from "react";
import he from "he";

const Question = ({ question, idx, i, questions, setQuestions, currentQuestion, setCurrentQuestion }) => {
    // const [isAnswered, setisAnswered] = useState(false);
    // const [user, setUser] = useState("");
    // const [createdAt, setCreatedAt] = useState("");
    // const [favorited, setFavorited] = useState(false);



    return (

<div className="questDiv">
    
    {/* <p>{question.question}</p> */}
    <p>{he.decode(question.question)}</p>

    </div>
    );
};

export default Question;