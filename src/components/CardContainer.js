import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Cards from './Cards.js';
import { items } from './utils.js';

/**
 * Image shuffling.
 * Creates a new array that has the length that matches the difficulty level by picking
 * out random images from an input array of images.
 * @param {Number} n difficulty level
 * @param {Array} arr content
 */
const getImage = (n, arr) => {
    const newArr = [];
    const clone = [...arr];

    for (let i = 0; i < n; i++) {
        const num = Math.floor(Math.random() * clone.length);

        newArr.push(clone[num]);
        clone.splice(num, 1);
    }

    return newArr;
}

/**
 * Creates card content.
 * Card contents is in the form of an array. We create an array based on the difficulty
 * level. If the difficulty level is 4 (default), we create an array of 8 images where
 * there will be a duplicate for each image.
 * @param {Number} difficulty the difficulty level
 */
const getContent = (difficulty) => {
    const arr1 = getImage(difficulty, items);

    return [...arr1, getImage(difficulty, arr1)].flat();
}

const CardContainer = ({ difficulty, didWin, handleWin, className }) => {
    const contents = getContent(difficulty);

    return (
        <Row className={`transition ${className}`}>
            <Container className="main">
                {!didWin && <Cards contents={contents} handleWin={handleWin} difficulty={difficulty} />}
                <div className={`red transition win-div win-div-text ${didWin ? "active" : ""}`}>You Won!!</div>
            </Container>
        </Row>
    );
}

export default CardContainer;