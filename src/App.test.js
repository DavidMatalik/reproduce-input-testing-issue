/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

// Works great
test('renders learn react link', () => {
  render(<App />)
  const button = screen.getByRole('button')
  const input = screen.getByLabelText('Some Input:')
  const counter = screen.getByRole('heading')

  userEvent.click(button)
  expect(counter).toHaveTextContent(1)

  userEvent.type(input, 'Hello')

  expect(input).toHaveValue('Hello')
})
