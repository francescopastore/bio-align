import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import AppTableCard from './AppTableCard'

const backgroundColor = '#AAAAAA'
const children = <div>TEST</div>

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AppTableCard
        backgroundColor={backgroundColor}
        children={children}
      ></AppTableCard>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('children rendering', () => {
  render(
    <AppTableCard
      backgroundColor={backgroundColor}
      children={children}
    ></AppTableCard>
  )

  const div = screen.getByText('TEST')
  expect(div).toBeInTheDocument()
})
