import React from 'react';
import * as rtl from 'react-testing-library';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

describe('Dashboard Component', () => {
  it('renders buttons', () => {
    const componentWrapper = rtl.render(<Dashboard />);
    expect(componentWrapper.getByText(/Strike/i));
    expect(componentWrapper.getByText(/Ball/i));
    expect(componentWrapper.getByText(/Foul/i));
    expect(componentWrapper.getByText(/Hit/i));
  });
});
