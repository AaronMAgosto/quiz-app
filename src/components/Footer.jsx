import { Container, Row, Col } from "react-bootstrap";



export default function Footer () {

  const currentYear = new Date().getFullYear();
  const gitHubLink = 'https://github.com/aaronmagosto/quiz-app';
  
  return (
    <footer>
      <Container className="footer">
         <Row>
          <Col> 
      <p><small>&copy; {currentYear}</small>
      <br />
      <a href={gitHubLink} target='_blank' rel='noreferrer'>Code in Github</a></p>
         </Col>
        </Row>
      </Container>
    </footer>
  )
}