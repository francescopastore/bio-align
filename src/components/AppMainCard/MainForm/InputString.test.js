import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import InputString from './InputString'

const fakeHandle = () => {}
const fakeLabel = 'test'
const fakeDefault = 'TEST'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <InputString
        default={fakeDefault}
        label={fakeLabel}
        handle={fakeHandle}
      ></InputString>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('default value param', () => {
  render(
    <InputString
      default={fakeDefault}
      label={fakeLabel}
      handle={fakeHandle}
    ></InputString>
  )

  const input = screen.getByTestId('value-input').querySelector('input')
  expect(input).toHaveValue(fakeDefault)
})

test('handle change param', () => {
  const newValue = 'TEST TEST'
  render(
    <InputString
      default={fakeDefault}
      label={fakeLabel}
      handle={fakeHandle}
    ></InputString>
  )

  const input = screen.getByTestId('value-input').querySelector('input')
  expect(input).toBeInTheDocument()

  fireEvent.change(input, { target: { value: newValue } })
  expect(input).toHaveValue(newValue)
})

test('shuffle', () => {
  render(
    <InputString
      default={fakeDefault}
      label={fakeLabel}
      handle={fakeHandle}
    ></InputString>
  )

  const button = screen.getByTestId('shuffle-button')
  expect(button).toBeInTheDocument()

  fireEvent.click(button)

  const input = screen.getByTestId('value-input').querySelector('input')
  expect(input).toBeInTheDocument()

  expect(input.value).not.toEqual(fakeDefault)
})
