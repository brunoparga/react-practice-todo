import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import App from '.';
import store from '../store';


configure({ adapter: new Adapter() });

// TODO: give store an API mock
const app = render(
  <Provider store={store}>
    <App />
  </Provider>,
);

test('App renders both todos', () => {
  expect(app.text()).toEqual(expect.stringMatching(/1.*2/));
});
