import React, { useState } from 'react';
import CardContainer from './CardContainer.js';
import DifficultySelect from './DifficultySelect.js';
import GameControls from './GameControls.js';

export default function GameContent() {
    const [difficulty, setDifficulty] = useState("4");
    const [gameStart, setGameStart] = useState(false)
    const [win, setWin] = useState(false);

    const handleDifficulty = d => setDifficulty(d);
    const handleWin = (didWin) => setWin(didWin);
    const handleGameStart = (e) => {
        setGameStart(e);
        handleWin(false);
    }

    return (
        <>
            <DifficultySelect didGameStart={gameStart} handleDifficulty={handleDifficulty} />
            <GameControls didGameStart={gameStart} didWin={win} handleGameStart={handleGameStart} />
            <CardContainer difficulty={difficulty} didWin={win} handleWin={handleWin}
                className={gameStart ? "active" : ""} />
        </>
    );
} 