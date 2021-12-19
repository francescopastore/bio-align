import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import FormInputNumber from './FormInputNumber'

const fakeHandle = () => {}
const fakeLabel = 'test'
const fakeDefault = 'TEST'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <FormInputNumber
        default={fakeDefault}
        label={fakeLabel}
        handle={fakeHandle}
      ></FormInputNumber>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('default value param', () => {
  render(
    <FormInputNumber
      default={fakeDefault}
      label={fakeLabel}
      handle={fakeHandle}
    ></FormInputNumber>
  )

  const input = screen.getByTestId('value-input').querySelector('input')
  expect(input).toHaveValue(fakeDefault)
})

test('handle change param', () => {
  const newValue = '2'
  render(
    <FormInputNumber
      default={fakeDefault}
      label={fakeLabel}
      handle={fakeHandle}
    ></FormInputNumber>
  )

  const input = screen.getByTestId('value-input').querySelector('input')
  expect(input).toBeInTheDocument()

  fireEvent.change(input, { target: { value: newValue } })
  expect(input).toHaveValue(newValue)
})
