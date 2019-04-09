import React from 'react';
import * as rtl from 'react-testing-library';

import Display from './Display';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

describe('Display component', () => {
  const dashboardWrap = rtl.render(<Dashboard />);

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

    expect(displayWrap.getByText(/0/i));

    rtl.fireEvent.click(dashboardWrap.getByText(/ball/i));

    expect(displayWrap.findByText(/1/i));
  });

  it('increases strikes count when clicking on ball button', () => {
    const displayWrap = rtl.render(<Display strikes={0} />);

    expect(displayWrap.getByText(/0/i));

    rtl.fireEvent.click(dashboardWrap.getByText(/strike/i));

    expect(displayWrap.findByText(/1/i));
  });
});
