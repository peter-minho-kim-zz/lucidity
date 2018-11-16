import React from 'react'
import { shallow } from 'enzyme'
import { DreamList } from '../../components/DreamList'
import dreams from '../fixtures/dreams'

test('should render DreamList with dreams', () => {
  const wrapper = shallow(<DreamList dreams={dreams} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render DreamList with empty message', () => {
  const wrapper = shallow(<DreamList dreams={[]} />)
  expect(wrapper).toMatchSnapshot()
})