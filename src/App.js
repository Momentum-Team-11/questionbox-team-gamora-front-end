import React, {useState, useEffect } from "react";
import axios from "axios";
import Question from "./components/Question"
import CategorySelect from "./components/CategorySelect"
// import he from "he";

const App = () => {
//   const loginURL
//   const signupURL
    const categoriesURL = "https://opentdb.com/api_category.php";
    const questionsURL = "https://opentdb.com/api.php?amount=10";
//   const profileURL
//   const [login, setLogin] = useState([]);
//   const [registration, setRegistration] = useState([]);
//   const [profile, setProfile] = useState([]);
    // const [user, setUser] = useState("");
//   const [home, setHome] = useState(true);
    const [questions, setQuestions] = useState([]);
//   const [askQuestion, setAskQuestion] = ([]);
//   const [deleteQuestion, setDeleteQuestion] = ([]);
//   const [questionList, setQuestionList] = ([]);
//   const [questionCategories, setQuestionCategories] = ([]);
//   const [answers, setAnswers] = ([]);
//   const [correctAnswer, setCorrectAnswer] = (false);
//   const [favorite, setFavorite] = (false);
    const [selected, setSelected] = useState(null);
    const [categories, setCategories] = useState([]);
    // const [currentQuestion, setCurrentQuestion] = useState(0);


//Questions

useEffect(() => {
    axios
    .get(questionsURL)
    .then((response) => {
        setQuestions(response.data.results);
    });
}, [selected]);


// Categories

useEffect(() => {
    axios
    .get(categoriesURL)
    .then((response) => {
    setCategories(response.data.trivia_categories);
    });
}, []);


    return (

    <div className="returnDiv">
        {questions.length > 0 ? (
            <div>
            {questions.map((question, idx) => {
                return (
                    <Question
                    key={idx}
                    question={question}
                    />
                );
            })}   
            </div>
        ) : (
            categories.map((category) => {
                return (
                    <CategorySelect
                    key={category.id}
                    category={category}
                    setSelected={setSelected}
                    />
                );
            })
        )}
    </div>
);
};

export default App;
