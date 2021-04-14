import About from './components/About/About';
import Header from './components/Header/Header';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <div className="mx-md-5 mx-sm-2">
      <Header />
      <About />
    </div>
  );
}

export default App;
