import React, { useState, useEffect } from "react"
import axios from "axios"
// import { QuestionList } from "./QuestionList"
// import { UserAnswers } from "./UserAnswers"
import { Navigate, Link, Params } from "react-router-dom";
import { Card, Media, Heading, Content, Button, Container, Notification } from 'react-bulma-components';
// import { QuestionCard } from "./QuestionCard";


//User Questions List
export const Profile = ({token, username, isLoggedIn, questionId}) => {
const [questions, setQuestions] = useState([])


useEffect(() => {
    axios
      .get("https://dj-questionbox.herokuapp.com/api/user_q_list", {
        headers: {Authorization: `Token ${token}`}
      })
      .then((response) => {
        console.log(response)
        // setAuth(username, response.data.auth_token);
        setQuestions(response.data);
      })
    }, [token]);

  if (isLoggedIn) {

  }

  return (
    <>
    <div className="columns is-mobile mt-6 mb-6">
      <div className="column is-half is-offset-one-quarter">
      <Heading>This is <em>{username}</em>'s box of rocks!</Heading> 
      </div>
    </div>

      {questions.map((question, key) => 
      
      <div key={key}>
      <Container mb='5' className="question-list container-box">
      <Card style={{ width: 800, margin: 'auto' }}>
        <Card.Content>
          <Media>
          <Media.Item>
            <Heading size={4}>{question.user}</Heading>
            <Heading subtitle size={6}>
            {question.created_at}
            </Heading>
          </Media.Item>
        </Media>
        <Content>
        <strong>{question.question}</strong>
          <br />
          <Container>
            <Notification color="info-light" mt="3" mb="3">
              {question.question}
            </Notification>
            </Container>
        <Button size="small">
        <Link to={`/question/${questionId}/answers`}>
        Click for more 
        </Link></Button>
        </Content>
      </Card.Content>
    </Card>
  </Container>
  </div>
  )}
</>
  );
};