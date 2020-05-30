import React from 'react';
import { shallow } from 'enzyme';
import { App } from './index';

describe('Some test', () => {
  test('Succesfull render', () => {
    const app = shallow(<App />);
    expect(app.exists()).toBeTruthy();
  });
});
