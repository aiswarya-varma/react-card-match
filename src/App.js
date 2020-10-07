import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import CardContainer from './components/CardContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';

/**
 * Main Component
 */
function App() {
  const [difficulty, setDifficulty] = useState("4");

  const handleDifficulty = e => {
    setDifficulty(e.target.value);
    // reload game without throwing away chosen difficulty
  }

  return (
    <div id="app">
      <Row className="justify-content-md-center"><h1 className="red">Match-Match</h1></Row>
      <Row className="justify-content-md-center">
        <Col md="3"></Col>
        <Col md="2" className="text-right">
          <label className="red control-label">Difficulty: </label>
        </Col>
        <Col md="3">
          <select className="form-control" onChange={handleDifficulty}>
            <option value="4">4 cards</option>
            <option value="8">8 cards</option>
          </select>
        </Col>
        <Col md="4"></Col>
      </Row>
      <Row>
        <Container className="main">
          <CardContainer difficulty={difficulty} />
        </Container>
      </Row>
    </div >
  );
}

export default App;
