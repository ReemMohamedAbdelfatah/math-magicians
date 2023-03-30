import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Test Home component', () => {
  it('Home component should match snapshot', () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });
});
