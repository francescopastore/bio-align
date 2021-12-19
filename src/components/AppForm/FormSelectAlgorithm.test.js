import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import FormSelectAlgorithm from './FormSelectAlgorithm'

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
      <FormSelectAlgorithm
        default={fakeDefault}
        options={fakeOptions}
        handle={fakeHandle}
      ></FormSelectAlgorithm>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('default value param', () => {
  render(
    <FormSelectAlgorithm
      default={fakeDefault}
      options={fakeOptions}
      handle={fakeHandle}
    ></FormSelectAlgorithm>
  )

  const input = screen.getByTestId('value-input').querySelector('input')
  expect(input).toHaveValue(fakeDefault)
})
