import React from 'react';
import * as rtl from 'react-testing-library';

import App from './App';

afterEach(rtl.cleanup);

describe('App component tests', () => {
  it('increases balls count when clicking on Ball button', () => {
    const wrapper = rtl.render(<App />);
    expect(wrapper.getByText(/0/i));
    rtl.fireEvent.click(wrapper.getByText(/^Ball$/i));
    expect(wrapper.findByText(/1/i));
  });

  it('increases strikes count when clicking on Strike button', () => {
    const wrapper = rtl.render(<App />);
    expect(wrapper.getByText(/0/i));
    rtl.fireEvent.click(wrapper.getByText(/^Strike$/i));
    expect(wrapper.findByText(/1/i));
  });

  it('reset strikes and balls count on hit click', () => {
    const wrapper = rtl.render(<App />);

    // increase the balls and strikes count
    rtl.fireEvent.click(wrapper.getByText(/^Ball$/i));
    rtl.fireEvent.click(wrapper.getByText(/^Strike$/i));

    // check if there is no 0
    expect(wrapper.queryByText(/0/i)).toBeFalsy();

    // reset counts
    rtl.fireEvent.click(wrapper.getByText(/^Hit$/i));
    expect(wrapper.findByText(/0/i));
  });

  it('click to increase strikes count above 3 resets it to 0', () => {
    const wrapper = rtl.render(<App />);

    // increase the balls and strikes count to 3
    rtl.fireEvent.click(wrapper.getByText(/^Strike$/i));
    rtl.fireEvent.click(wrapper.getByText(/^Strike$/i));
    rtl.fireEvent.click(wrapper.getByText(/^Strike$/i));
    // another increase should reset it to 0
    rtl.fireEvent.click(wrapper.getByText(/^Strike$/i));
    expect(wrapper.getByText(/0/i));
  });
});
