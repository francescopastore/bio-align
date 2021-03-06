import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import { store } from '../store'

import AppMainCard from './AppMainCard'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <AppMainCard></AppMainCard>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
