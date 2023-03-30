import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Links from './Links';

describe('Link', () => {
  it('links component should match snapshot', () => {
    const homeLink = render(<BrowserRouter><Links /></BrowserRouter>);
    expect(homeLink).toMatchSnapshot();
  });
});
