import React from 'react'
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react'
import 'jest-dom/extend-expect'
import Clickers from './Clickers'

afterEach(cleanup);

it('displays count', () =>{
    const { getByTestId } = render(<Clickers/>);
    expect(getByTestId('count')).toHaveTextContent(0);
})
it('increments count', () => {
    const { getByTestId, getByText } = render(<Clickers/>);
    fireEvent.click(getByText('up'))
    expect(getByTestId('count')).toHaveTextContent(1);
})

it('decrements count delayed', async () => {
    const { getByText } = render( <Clickers />);
    fireEvent.click(getByText('down'));
    await waitForElement( () =>() => getByText('-1') );
})