import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import { store } from '../../store'
import MainForm from './MainForm'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MainForm></MainForm>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
