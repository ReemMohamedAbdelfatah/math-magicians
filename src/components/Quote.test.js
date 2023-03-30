import React from 'react';
import { render } from '@testing-library/react';
import Quotes from './Quote';

describe('Quotes', () => {
  it('Quotes to match Snapshot', () => {
    const quotes = render(<Quotes />);
    expect(quotes).toMatchSnapshot();
  });
});
