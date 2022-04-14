import React, { useState, useEffect } from "react"
import axios from "axios"
// import { QuestionForm } from "./QuestionForm";
import { Link, Params } from 'react-router-dom'
import { Card, Media, Heading, Content, Button, Container } from 'react-bulma-components';


//All Questions List
export const QuestionList = ({token, questionId}) => {
  const [questions, setQuestions] = useState([]);


useEffect(() => {
    axios
      .get("https://dj-questionbox.herokuapp.com/api/question", 
      {headers: {Authorization: `Token ${token}`}}
      )
      .then((response) => {
        console.log(response)
        // setAuth(username, response.data.auth_token);
        setQuestions(response.data);
      })
  }, [token]);

  if (!questions) return null;


    return (
      <>
      <div className="columns is-mobile mt-6 mb-6">
        <div className="column is-half is-offset-one-quarter">
        <Heading>This is a box of rocks!</Heading>
        <h1>Your very own place to keep those rock of yours from a-rolllin' and gathering no moss</h1>
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
            </Media.Item>
          </Media>
          <Content>
          <strong><center>{question.question}</center></strong>
            <br />
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