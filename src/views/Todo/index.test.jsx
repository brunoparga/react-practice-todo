import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Todo from '.';

configure({ adapter: new Adapter() });

const todo = { task: 'TDD a to-do app', done: false };
const page = shallow(<Todo todo={todo} />);
let checkbox = page.find('input');

it('Correctly shows task and status', () => {
  expect(page.text()).toEqual('TDD a to-do app');
  expect(checkbox.prop('checked')).toEqual(false);
  checkbox.simulate('change');
  checkbox = page.find('input');
  expect(checkbox.prop('checked')).toEqual(true);
});

test('Keeps status when reloading', () => {
  const statusBefore = checkbox.prop('checked');
  page.update();
  expect(page.find('input').prop('checked').not.toEqual(statusBefore));
});
