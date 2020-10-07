import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function DifficultySelect(props) {
    return (
        <Row className="justify-content-md-center">
            <Col md="3"></Col>
            <Col md="2" className="text-right">
                <label className="red control-label">Difficulty: </label>
            </Col>
            <Col md="3">
                <select className="form-control" onChange={(e) => props.handleDifficulty(e.target.value)}
                    disabled={props.didGameStart ? true : false}>
                    <option value="4">4 cards</option>
                    <option value="8">8 cards</option>
                </select>
            </Col>
            <Col md="4"></Col>
        </Row>
    )
}