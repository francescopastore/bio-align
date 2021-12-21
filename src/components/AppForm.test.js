import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import { store } from '../store'
import AppForm from './AppForm'

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
