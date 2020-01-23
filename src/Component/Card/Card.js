import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {

    static defaultProps = {
        title: '',
        description: '',
    }

    render() { 
        return (
            <div className='Card'>

            </div>
        );
    }
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}


export default Card;