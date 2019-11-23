import React from 'react';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Checkbox in App changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<App labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');
  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('On');
})
