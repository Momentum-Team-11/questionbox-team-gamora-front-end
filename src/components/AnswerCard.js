import { Link, Params } from 'react-router-dom'
import { Card, Media, Heading, Content, Button, Container, Notification } from 'react-bulma-components';


export const AnswerCard = ({ user, answered_at , title, answer, questionId }) => {
  return (    

    <Container mb='5' className="question-list container-box">
    <Card>
        <Card.Content>
            <Media>
            <Media.Item>
            <Heading size={4}>{user}</Heading>
            <Heading subtitle size={6}>
            {answered_at}
            </Heading>
            </Media.Item>
        </Media>
        <Content>
        <strong>{title}</strong>
          <br />
          <Container>
            <Notification color="info-light" mt="3" mb="3">
              {answer}
            </Notification>
            </Container>
        <Button size="small" color="primary">
        <Link to={`/question/${questionId}/answers`}>
        See original question 
        </Link></Button>
				<br />
          <small>
              Like button
          </small>
        </Content>
      </Card.Content>
    </Card>
  </Container>
  );
};

export default AnswerCard