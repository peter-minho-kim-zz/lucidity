import React from 'react'
import { shallow } from 'enzyme'
import dreams from '../fixtures/dreams'
import { EditDreamPage } from '../../components/EditDreamPage'

let editDream, removeDream, history, wrapper

beforeEach(() => {
  editDream = jest.fn()
  removeDream = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditDreamPage 
      editDream={editDream} 
      removeDream={removeDream} 
      history={history}
      dream={dreams[2]}
    />)
})

test('should render EditDreamPage', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editDream', () => {
  wrapper.find('DreamForm').prop('onSubmit')(dreams[2])
  expect(history.push).toHaveBeenLastCalledWith('/dreams')
  expect(editDream).toHaveBeenLastCalledWith(dreams[2].id, dreams[2])
})

test('should handle removeDream', () => {
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/dreams')
  expect(removeDream).toHaveBeenLastCalledWith(dreams[2])
})