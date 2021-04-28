import About from './components/About/About';
import Header from './components/Header/Header';
import { isMobile } from 'react-device-detect';

function App() {
  return (
    <div className={isMobile ? "mx-3" : "mx-4"}>
      <Header />
      <About />
    </div>
  );
}

export default App;
