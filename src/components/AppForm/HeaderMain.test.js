import React from 'react'
import renderer from 'react-test-renderer'

import HeaderMain from './HeaderMain'

it('renders correctly', () => {
  const tree = renderer.create(<HeaderMain></HeaderMain>).toJSON()
  expect(tree).toMatchSnapshot()
})
