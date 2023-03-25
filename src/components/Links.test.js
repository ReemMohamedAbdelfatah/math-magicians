import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Links from './Links';

const LinkMock = () => {
  <BrowserRouter>
    <Links />
  </BrowserRouter>;
};
describe('Test Link components', () => {
  it('render correctly', () => {
    const tree = renderer.create(<LinkMock />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
