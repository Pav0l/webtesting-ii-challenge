import React from 'react';
import * as rtl from 'react-testing-library';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

describe('Dashboard component', () => {
  it('renders buttons', () => {
    const dashboardWrap = rtl.render(<Dashboard />);
    expect(dashboardWrap.getByText(/Strike/i));
    expect(dashboardWrap.getByText(/Ball/i));
    expect(dashboardWrap.getByText(/Foul/i));
    expect(dashboardWrap.getByText(/Hit/i));
  });
});
