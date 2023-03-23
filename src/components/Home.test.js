import renderer from 'react-test-renderer';
import Home from './Home';

describe('Test Home component', () => {
  it('Home component should match snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
