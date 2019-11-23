import React from 'react';
import Todo from './Todo';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const todo = { task: 'TDD a to-do app', done: false }
const page = shallow(<Todo todo={todo} />);

it('Correctly shows task and status', () => {
  expect(page.text()).toEqual('TDD a to-do app');
  let checkbox = page.find('input');
  expect(checkbox.prop('checked')).toEqual(false);
  checkbox.simulate('change');
  checkbox = page.find('input');
  expect(checkbox.prop('checked')).toEqual(true);
})

test.todo('Should keep status when reloading')
