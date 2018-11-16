import React from 'react'
import { shallow } from 'enzyme'
import DreamsPage from '../../components/DreamsPage'

test('should render DreamsPage correctly', () => {
  const wrapper = shallow(<DreamsPage />)
  expect(wrapper).toMatchSnapshot()
})