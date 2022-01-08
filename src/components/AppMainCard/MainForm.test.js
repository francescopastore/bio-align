import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import { store } from '../store'
import AppForm from './MainForm'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <AppForm></AppForm>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
