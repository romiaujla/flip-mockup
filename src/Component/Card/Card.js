import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';
import './Card.css';

class Card extends Component {

    static defaultProps = {
        question: '',
        answer: '',
    }

    constructor(props){
        super(props);
        this.state = {
            isFlipped: false,
        }
    }

    handleFlip = () => {
        this.setState({
            isFlipped: !this.state.isFlipped,
        })
    }

    render() { 
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection='horizontal' className='Card'>
                <div className='card-front'>
                    <p>{this.props.question}</p>
                    <button onClick={this.handleFlip}>Learn about me</button>
                </div>
                <div className='card-back'>
                    <p>{this.props.answer}</p>
                    <button onClick={this.handleFlip}>Thank you.</button>
                </div>
            </ReactCardFlip>
        );
    }
}

Card.propTypes = {
    // add props and their data types in here
    question: PropTypes.string,
    answer: PropTypes.string,
}


export default Card;