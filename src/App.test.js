import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Game from './component/Game';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});
