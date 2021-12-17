import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import FormInputString from './FormInputString'

const fakeHandleChange = () => {}
const fakeLabel = 'test'
const fakeDefaultValue = 'TEST'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <FormInputString
        default={fakeDefaultValue}
        label={fakeLabel}
        handle={fakeHandleChange}
      ></FormInputString>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('default value param', () => {
  render(
    <FormInputString
      default={fakeDefaultValue}
      label={fakeLabel}
      handle={fakeHandleChange}
    ></FormInputString>
  )

  const input = screen.getByTestId('value-input').querySelector('input')
  expect(input).toHaveValue(fakeDefaultValue)
})

test('handle change param', () => {
  const newValue = 'TEST'
  const fakeHandleChange = (value) => {
    expect(value).toBe(newValue)
  }
  render(
    <FormInputString
      default={fakeDefaultValue}
      label={fakeLabel}
      handle={fakeHandleChange}
    ></FormInputString>
  )

  const input = screen.getByTestId('value-input').querySelector('input')
  expect(input).toBeInTheDocument()

  fireEvent.change(input, { target: { value: newValue } })
  expect(input).toHaveValue(newValue)
})

test('shuffle', () => {
  render(
    <FormInputString
      default={fakeDefaultValue}
      label={fakeLabel}
      handle={fakeHandleChange}
    ></FormInputString>
  )

  const button = screen.getByTestId('shuffle-button')
  expect(button).toBeInTheDocument()

  fireEvent.click(button)

  const input = screen.getByTestId('value-input').querySelector('input')
  expect(input).toBeInTheDocument()

  expect(input.value).not.toEqual(fakeDefaultValue)
})
