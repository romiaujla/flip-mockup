import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App Component', () => {

  //Smoke test
  it(`renders without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <App></App>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  })

});
