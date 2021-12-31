import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import CellCard from './CellCard'

const backgroundColor = '#AAAAAA'
const children = <div>TEST</div>

it('renders correctly', () => {
  const tree = renderer
    .create(
      <CellCard
        backgroundColor={backgroundColor}
        children={children}
      ></CellCard>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('children rendering', () => {
  render(
    <CellCard backgroundColor={backgroundColor} children={children}></CellCard>
  )

  const div = screen.getByText('TEST')
  expect(div).toBeInTheDocument()
})
