import React from 'react';
import * as rtl from 'react-testing-library';
import Display from './Display';

afterEach(rtl.cleanup);

describe('Display Component', () => {
  it('displays balls count', () => {
    const componentWrapper = rtl.render(<Display balls={0} />);
    expectExport(componentWrapper.getByText(0));
  });

  it('displays strikes count', () => {
    const componentWrapper = rtl.render(<Display strikes={0} />);
    expectExport(componentWrapper.getByText(0));
  });
});
