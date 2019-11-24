import React from 'react';
import App from './App';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

const todos = [{ task: 'Task 1', done: false }, { task: 'Task 2', done: true }]
const app = render(<Provider><App todos={todos} /></Provider>);

test('App renders both todos', () => {
  expect(app.text()).toEqual(expect.stringMatching(/1.*2/));
})
