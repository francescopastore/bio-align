import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import AppTableLetter from './AppTableLetter'

const fakeLetter = 'A'

it('renders correctly', () => {
  const tree = renderer
    .create(<AppTableLetter letter={fakeLetter}></AppTableLetter>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('should render the letter given', () => {
  render(<AppTableLetter letter={fakeLetter}></AppTableLetter>)

  const div = screen.getByText(fakeLetter)
  expect(div).toHaveTextContent(fakeLetter)
})
