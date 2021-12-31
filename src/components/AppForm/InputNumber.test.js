import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import InputNumber from './InputNumber'

const fakeHandle = () => {}
const fakeLabel = 'test'
const fakeDefault = 'TEST'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <InputNumber
        default={fakeDefault}
        label={fakeLabel}
        handle={fakeHandle}
      ></InputNumber>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('default value param', () => {
  render(
    <InputNumber
      default={fakeDefault}
      label={fakeLabel}
      handle={fakeHandle}
    ></InputNumber>
  )

  const input = screen.getByTestId('value-input').querySelector('input')
  expect(input).toHaveValue(fakeDefault)
})

test('handle change param', () => {
  const newValue = '2'
  render(
    <InputNumber
      default={fakeDefault}
      label={fakeLabel}
      handle={fakeHandle}
    ></InputNumber>
  )

  const input = screen.getByTestId('value-input').querySelector('input')
  expect(input).toBeInTheDocument()

  fireEvent.change(input, { target: { value: newValue } })
  expect(input).toHaveValue(newValue)
})
