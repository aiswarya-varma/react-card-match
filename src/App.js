import React from 'react';
import { Row } from 'react-bootstrap';
import GameContent from './components/GameContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';

/**
 * Main Component
 */
function App() {
  return (
    <div id="app" style={{ height: "1100px" }}>
      <Row className="justify-content-md-center"><h1 className="red">Match-Match</h1></Row>
      <GameContent />
    </div >
  );
}

export default App;
