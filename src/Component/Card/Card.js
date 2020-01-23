import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';
import './Card.css';

class Card extends Component {

    static defaultProps = {
        question: '',
        answers: [],
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
                    {
                        this.props.answers.map(answer => {
                            return <p>{answer}</p>;
                        })
                    }
                    <button onClick={this.handleFlip}>Thank you.</button>
                </div>
            </ReactCardFlip>
        );
    }
}

Card.propTypes = {
    // add props and their data types in here
    question: PropTypes.string,
    answers: PropTypes.array,
}


export default Card;