import React from 'react';
import 'jest-dom/extend-expect'
import { render, cleanup} from '@testing-library/react'
import App from './App';

afterEach(cleanup);

it('renders without crashing', () => {
  const { asFragment} = render( <App text='Hello!'/>);
  expect(asFragment()).toMatchSnapshot();
});

it('inserts text in h2',() =>{
  const {getByTestId, getByText } = render(<App text='Hello!'/>);
  expect(getByTestId('h2tag')).toHaveTextContent('Hello!');
  expect(getByText('Hello!')).toHaveClass('fancy-h2');
})