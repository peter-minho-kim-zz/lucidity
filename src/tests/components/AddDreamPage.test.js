import React from 'react'
import { shallow } from 'enzyme'
import { AddDreamPage } from '../../components/AddDreamPage'
import dreams from '../fixtures/dreams'

let addDream, history, wrapper

beforeEach(() => {
  addDream = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<AddDreamPage addDream={addDream} history={history} />)
})

test('should render AddDreamPage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
  wrapper.find('DreamForm').prop('onSubmit')(dreams[0])
  expect(history.push).toHaveBeenLastCalledWith('/dreams')
  expect(addDream).toHaveBeenLastCalledWith(dreams[0])
})