import { Link } from 'react-router-dom'
import { Card, Media, Heading, Content, Button, Container, Notification } from 'react-bulma-components';


export const QuestionCard = ({ created_at, user, question, pk, date_asked, token, setBestAnswer, bestAnswer, questionId }) => {
  return (
      <Container mb='5' className="question-list container-box">
  
      <Card style={{ width: 900, margin: 'auto' }}>
        <Card.Content>
          <Media>
            <Media.Item renderAs="figure" align="left">
          </Media.Item>
          <Media.Item>
            <Heading size={4}>{user}</Heading>
            <Heading subtitle size={6}>
            {created_at}
            </Heading>
          </Media.Item>
        </Media>
        <Content>
        <strong>{question}</strong>
          <br />
          <Container>
            <Notification color="info-light" mt="3" mb="3">
              {question}
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
  )
}