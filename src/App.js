import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="main">


      <Container fluid>

        <Row>
          <Col> <div className="main__header">1</div></Col>
        </Row>

        <Row noGutters>
          <Col>
            <div className="main__leftmenu">2</div>
          </Col>
          <Col>
            <div className="main__list">3</div>
          </Col>
          <Col>
            <div className="main__dashboard">4</div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="main__footer">5</div>
          </Col>
        </Row>

      </Container >


    </div>
  );
}

export default App;
