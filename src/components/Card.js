import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

/**
 * Creates each card with image.
 * @param {Object} props component props - card image
 */
const Card = (props) => {
    const handleFlip = (e) => {
        props.handleClick(e.currentTarget.getAttribute('data-card'));
    }

    return (
        <Col md={props.cols}>
            <div data-card={props.name} onClick={handleFlip}
                className={`${props.didMatch ? "" : "flip-card"} space-below card-size-${props.cols === "3" ? "4" : "8"}`}>
                <div className={`flip-card-inner ${props.doFlip ? "flip-horizontal" : ""}`}>
                    <div className="flip-card-front"></div>
                    <div className="flip-card-back">
                        <div className="overlay-container full-size">
                            <Image width="100%" height="100%" alt="190x200" src={props.img} rounded />
                            <div className={`${props.didMatch ? "show-overlay" : ""} overlay`}>
                                <a href="/#" className="icon">
                                    <FontAwesomeIcon icon={faCheck} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default Card;