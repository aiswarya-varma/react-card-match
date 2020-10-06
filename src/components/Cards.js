import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Card from './Card.js';
import { getCardName } from './utils.js';

const removeItem = (cardArr, card) => {
    const index = cardArr.indexOf(card);
    cardArr.splice(index, 1);

    return cardArr;
}

const didMatch = (cardArr, card) => {
    return getText(cardArr[0]) === getText(card);
}

const getText = (str) => {
    return str.replace(/\d+/g, "");
}

const addToMatched = (matchedArr, card) => [...matchedArr, getText(card)];

/**
 * Creates all cards
 * @param {Object} props component props - difficulty level 
 */
const Cards = (props) => {
    const [flipped, setFlipped] = useState([]);
    const [matched, setMatched] = useState([]);

    const handleFlipped = (flippedCard) => {
        if (flipped.length < 2) {
            if (flipped.includes(flippedCard)) {
                setFlipped(removeItem(flipped, flippedCard));
            }
            else if (flipped.length === 1 && didMatch(flipped, flippedCard)) {
                setMatched(addToMatched(matched, flippedCard));
                setFlipped([]);
            }
            else {
                setFlipped([...flipped, flippedCard]);
            }
        }
        else if (flipped.length === 2 && flipped.includes(flippedCard)) {
            setFlipped([]);
        }
        else {
            setFlipped([flippedCard]);
        }
    }

    const { contents, handleWin, difficulty } = props;

    useEffect(() => {
        return handleWin(matched.length.toString() === difficulty);
    });

    return (
        <Row>
            {
                contents.map((c, i) => {
                    const name = getCardName(c);
                    const cardName = `${name}${i}`;

                    return <Card
                        key={i}
                        img={c}
                        cols={difficulty === "4" ? "3" : "2"}
                        name={cardName}
                        handleClick={handleFlipped}
                        doFlip={flipped.includes(cardName)}
                        didMatch={matched.includes(name)}
                    />
                })
            }
        </Row>
    );
}

export default Cards;