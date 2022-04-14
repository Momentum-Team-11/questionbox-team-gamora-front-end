import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { AnswerForm } from "./AnswerForm";
import { useParams } from "react-router-dom";
import { AnswerList } from "./AnswerList";
import { Link } from "react-router-dom";
import { Container, Notification, Section, Box, Heading, Card, Media, Content, Button } from 'react-bulma-components';



const QuestionDetails = ({ token, username, answer }) => {
    const [question, setQuestion] = useState([]);
    const [answers, setAnswers] = useState([]);
    // const [isSubmit, setSubmit] = useState(false);
    const [acceptedResponse, setAcceptedResponse] = useState(null)
    const {questionId} = useParams();


    useEffect(() => {
    axios
    .get(`https://dj-questionbox.herokuapp.com/api/question/${questionId}/answers`, {
        headers: {Authorization: `Token ${token}`},
    },)
    .then((response) => {
        setQuestion(response.data)
        setAnswers(response.data.answers)
        setAcceptedResponse(response.data.accepted_response)
    })
    }, [questionId, acceptedResponse, token, username])


    return (
<>
      <Button><Link to="/">Back to all questions</Link></Button>
    
      {question && (
        <>
      
      <Section style={{ width: '65%', margin: 'auto' }} > 
      <Card style={{
      border: '2px dotted gray'
    }}>
        <Card.Content>
          <Media>
            <Media.Item renderAs="figure" align="left">
          </Media.Item>
          <Media.Item>
            <Heading size={4}>{question.user}</Heading>
            <Heading subtitle size={6}>
            {question.created_at}
            </Heading>
          </Media.Item>
        </Media>
     
        <strong>{question.title}</strong>
          <br />
          <Container>
            <Notification color="info-light" mt="3" mb="2">
              {question.question}
            </Notification>
            </Container>
      
      </Card.Content>
    </Card>
  </Section>

  <Section style={{ width:'65%', margin: 'auto' }}>    
      <Box >
      {answers.map((answer, idx) => 
        <Media key={answer.id}renderAs="article">
          <Media.Item align="left">
          </Media.Item>
          <Media.Item align="center">
            <Content>
              <div>
                <strong>{answer.user}</strong>
                <br />
                <p>{answer.date_answered}</p>
              <Box>
                {answer.answer}

                <br />

            {answer.accepted && <Notification className="is-danger is-light mr-6 p-3"><strong>Thanks Bestie!</strong></Notification>}

            {(!question.accepted_response && (username === question.user) &&
            <AnswerList
              answerId={answer.id}     
              questionId={question.id}
              setAcceptedResponse={setAcceptedResponse}        
              />
            )}
            </Box>
              </div>
            </Content>
          </Media.Item>
        </Media>
      )}
    </Box>


  {/* Here is where a user can reply */}
    <Box mt="4" >
  
      <Media id={question.pk} renderAs="article" >
          <Media.Item align="left">
          </Media.Item>
          <Media.Item id="answer-text" align="center">
          
          <AnswerForm
                questionId={question.id}
                answer={answer}
          />
          </Media.Item>
        </Media>
      </Box>
    </Section>
    
    )
      </>
      )}
    </>
    
  )
}
export default QuestionDetails

