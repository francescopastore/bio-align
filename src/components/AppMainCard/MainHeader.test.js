import React from 'react'
import renderer from 'react-test-renderer'

import MainHeader from './MainHeader'

it('renders correctly', () => {
  const tree = renderer.create(<MainHeader></MainHeader>).toJSON()
  expect(tree).toMatchSnapshot()
})
