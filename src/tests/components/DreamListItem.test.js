import React from 'react'
import { shallow } from 'enzyme'
import DreamListItem from '../../components/DreamListItem'
import dreams from '../fixtures/dreams'

test('should render Dream list item', () => {
  const wrapper = shallow(<DreamListItem {...dreams[0]} />)
  expect(wrapper).toMatchSnapshot()
})