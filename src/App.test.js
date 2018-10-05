import React from 'react';
import ReactDOM from 'react-dom';
import Catalogo from './Catalogo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Catalogo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
