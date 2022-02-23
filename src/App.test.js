/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

// Works great
test('renders learn react link', async () => {
  render(<App />)
  const button = screen.getByRole('button')

  userEvent.click(button)
  expect(await screen.findByRole('heading')).toHaveTextContent(1)

  userEvent.type(screen.getByLabelText('Some Input'), 'Hello')
  expect(await screen.findByLabelText('Some Input')).toHaveValue('Hello')
})
