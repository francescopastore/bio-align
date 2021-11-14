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

it('should handle inputs', () => {
  render(
    <FormInputWord
      defaultValue={fakeDefaultValue}
      label={fakeLabel}
      handleChange={fakeHandleChange}
    ></FormInputWord>
  )

  const input = screen.getByTestId('value-input').querySelector('input')
  expect(input).toBeInTheDocument()

  const newValue = 'TEST'
  fireEvent.change(input, { target: { value: newValue } })
  expect(input).toHaveValue(newValue)
})
