import { PureComponent, React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import Links from './components/Links';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Links style={{ width: '100%' }} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/calculator" element={<Calculator />} />
            <Route exact path="/quote" element={<Quote />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
