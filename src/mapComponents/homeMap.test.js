import React from 'react';
import ReactDOM from 'react-dom';
import homeMap from '../mapComponents';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<homeMap />, div);
  ReactDOM.unmountComponentAtNode(div);
});
