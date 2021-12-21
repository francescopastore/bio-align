import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import { store } from '../store'
import AppTable from './AppTable'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <AppTable></AppTable>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
