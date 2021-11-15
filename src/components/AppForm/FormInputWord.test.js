import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import FormInputWord from './FormInputWord'

const fakeHandleChange = () => {}
const fakeLabel = 'test'
const fakeDefaultValue = 'ACTC'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <FormInputWord
        defaultValue={fakeDefaultValue}
        label={fakeLabel}
        handleChange={fakeHandleChange}
      ></FormInputWord>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('default value param', () => {
  render(
    <FormInputWord
      defaultValue={fakeDefaultValue}
      label={fakeLabel}
      handleChange={fakeHandleChange}
    ></FormInputWord>
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
    <FormInputWord
      defaultValue={fakeDefaultValue}
      label={fakeLabel}
      handleChange={fakeHandleChange}
    ></FormInputWord>
  )

  const input = screen.getByTestId('value-input').querySelector('input')
  expect(input).toBeInTheDocument()

  fireEvent.change(input, { target: { value: newValue } })
  expect(input).toHaveValue(newValue)
})
