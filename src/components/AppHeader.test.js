import React from 'react'
import renderer from 'react-test-renderer'

import AppHeader from './AppHeader'

it('renders correctly', () => {
  const tree = renderer.create(<AppHeader></AppHeader>).toJSON()
  expect(tree).toMatchSnapshot()
})
