import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import SelectAlgorithm from './SelectAlgorithm'

const fakeHandle = () => {}
const fakeOptions = [
  { label: 'Test 1' },
  { label: 'Test 2' },
  { label: 'Test 3' },
]
const fakeDefault = '0'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <SelectAlgorithm
        default={fakeDefault}
        options={fakeOptions}
        handle={fakeHandle}
      ></SelectAlgorithm>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('default value param', () => {
  render(
    <SelectAlgorithm
      default={fakeDefault}
      options={fakeOptions}
      handle={fakeHandle}
    ></SelectAlgorithm>
  )

  const input = screen.getByTestId('value-input').querySelector('input')
  expect(input).toHaveValue(fakeDefault)
})
