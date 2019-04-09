import React from 'react';
import * as rtl from 'react-testing-library';

import Display from './Display';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

describe('Display component', () => {
  it('displays balls count', () => {
    const componentWrapper = rtl.render(<Display balls={0} />);
    expect(componentWrapper.getByText(/0/i));
  });

  it('displays strikes count', () => {
    const componentWrapper = rtl.render(<Display strikes={0} />);
    expect(componentWrapper.getByText(/0/i));
  });

  it('increases balls count when clicking on ball button', () => {
    const displayWrap = rtl.render(<Display balls={0} />);
    const dashboardWrap = rtl.render(<Dashboard />);
    expect(displayWrap.getByText(/0/i));
    rtl.fireEvent.click(dashboardWrap.getByText(/ball/i));
    expect(displayWrap.findByText(/1/i));
  });

  it('increases strikes count when clicking on ball button', () => {
    const displayWrap = rtl.render(<Display strikes={0} />);
    const dashboardWrap = rtl.render(<Dashboard />);
    expect(displayWrap.getByText(/0/i));
    rtl.fireEvent.click(dashboardWrap.getByText(/strike/i));
    expect(displayWrap.findByText(/1/i));
  });

  it('reset strikes and balls count on hit click', () => {
    const displayWrap = rtl.render(<Display strikes={2} balls={1} />);
    const dashboardWrap = rtl.render(<Dashboard />);
    expect(displayWrap.queryByText(/0/i)).toBeFalsy();
    rtl.fireEvent.click(dashboardWrap.getByText(/hit/i));
    expect(displayWrap.findByText(/0/i));
  });
});
