import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { useSelector } from "react-redux";

function App() {
  const datas = useSelector((state) => state).contacts.contacts;
  console.log(datas);

  return (
    <div className="App">
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm></ContactForm>
          </Col>

          <Col></Col>
          {datas?.map((data, i) => (
            <div key={i}>
              <li>{data.name}</li>
              <li>{data.phoneNumber}</li>
            </div>
          ))}
          <ContactList></ContactList>
        </Row>
      </Container>
    </div>
  );
}

export default App;