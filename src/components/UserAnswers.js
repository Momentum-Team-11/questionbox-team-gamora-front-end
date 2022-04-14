import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, Media, Heading, Content, Button, Container, Notification } from 'react-bulma-components';


//User Answers List
export const UserAnswers = ({token}) => {
const [userAnswers, setUserAnswers] = useState([])
const {questionId} = useParams();

useEffect(() => {
    axios
      .get("https://dj-questionbox.herokuapp.com/api/user_a_list", {
        headers: {Authorization: `Token ${token}`},
      })
      .then((response) => {
        console.log(response)
        setUserAnswers(response.data);
      })
  }, [token]);

  if (!userAnswers) return null;

    return (
<>
    <div className="header-home">
      <h1>This is a list of the user's answers. </h1>
      
    </div>
      {userAnswers.map((answer, key) => 
      
      <div key={key}>
      <Container mb='5' className="question-list container-box">
      <Card style={{ width: 800, margin: 'auto' }}>
        <Card.Content>
          <Media>
          <Media.Item>
            <Heading size={4}>{answer.user}</Heading>
            <Heading subtitle size={6}>
            {answer.date_asked}
            </Heading>
          </Media.Item>
        </Media>
        <Content>
        <strong>{answer.answer}</strong>
          <br />
          <Container>
            <Notification color="info-light" mt="3" mb="3">
              {answer.answer}
            </Notification>
            </Container>
        <Button size="small">
        <Link to={`/question/${questionId}/answers`}>
        See original question 
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





    // <div className="homeDiv">
    //   <h2>This is user's box of rocks</h2>
    //   {userAnswers.map((answer, key) => 
    //     <div answer={key}>
    //       {answer.user}
    //       {answer.answer}

    //     <button>
    //     <Link to={`/question/${questionId}/answers`}>
    //     Original Box 
    //     </Link></button>
    //     </div>
    //   )}
    // </div>
