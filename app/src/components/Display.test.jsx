import React from 'react';
import * as rtl from 'react-testing-library';
import Display from './Display';

afterEach(rtl.cleanup);

describe('Display component', () => {
  it('displays balls count', () => {
    const componentWrapper = rtl.render(<Display balls={0} strikes={0} />);
    expect(componentWrapper.getByText(/0/i));
  });

  it('displays strikes count', () => {
    const componentWrapper = rtl.render(<Display strikes={0} balls={0} />);
    expect(componentWrapper.getByText(/0/i));
  });
});
