import React from 'react'
import { shallow } from 'enzyme'
import DreamWalkerDashboardPage from '../../components/DreamWalkerDashboardPage'

test('should render dashboard page correctly', () => {
  const wrapper = shallow(<DreamWalkerDashboardPage />)
  expect(wrapper).toMatchSnapshot()
})