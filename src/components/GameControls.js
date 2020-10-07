import React from 'react';
import { Row, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function GameControls({ didGameStart, didWin, handleGameStart }) {
    const setNewGame = () => {
        handleGameStart(false);
    }

    return (
        <Row className="justify-content-md-center top-padding">
            <Button variant="success" size="lg" onClick={() => handleGameStart(true)}
                className={!didWin && !didGameStart ? "show-control" : "hide-control"}>Start Game</Button>
            <OverlayTrigger placement={"right"}
                overlay={
                    <Tooltip id="tooltip-right">
                        Restart game to change difficulty
                    </Tooltip>
                }>
                <Button variant="info" size="lg" onClick={() => setNewGame()}
                    className={didWin || didGameStart ? "show-control" : "hide-control"}>Restart Game</Button>
            </OverlayTrigger>
        </Row>
    );
}