import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

describe(`Card Component`, () => {
    
    // Smoke test
    it(`renders component without crashing`, () => {
        const div = document.createElement('div');
        ReactDOM.render(
        <Card></Card>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})