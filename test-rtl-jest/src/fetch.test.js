import React from 'react'
import { render, cleanup, waitForElement } from '@testing-library/react'
import 'jest-dom/extend-expect'
import axiosMock from 'axios'
import Fetch from './Fetch'




afterEach(cleanup)
it('fetches and displays data', async() => {
axiosMock.get.mockResolvedValueOnce( { data : { greeting: 'hello there'}});

const url = '/greeting';
const { getByTestId } = render(<Fetch url ={ url }/>);
expect(getByTestId('loading')).toHaveTextContent('Loading data...');
})

//to silence warning
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})