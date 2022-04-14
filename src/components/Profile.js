import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import { Card, Heading, Content, Button, Container } from 'react-bulma-components';


//User Questions List
export const Profile = ({token}) => {
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


  return (
    <>
    <div className="columns is-mobile mt-6 mb-6">
      <div className="column is-half is-offset-one-quarter">
      <Heading>This is your very own box of rocks!</Heading> 
      </div>
    </div>

      {questions.map((question, key) => 
      
      <div key={key}>
      <Container mb='5' className="question-list container-box">
      <Card style={{ width: 800, margin: 'auto' }}>
        <Card.Content>

        <Content>
        <strong>{question.question}</strong>
          <br />
        <Button size="small">
        <Link to={`/answers/*`}>
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