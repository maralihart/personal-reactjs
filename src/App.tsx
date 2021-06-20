import About from './components/About/About';
import Header from './components/Header/Header';
import { isMobile } from 'react-device-detect';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Links from './components/Links/Links';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/links">
          <Links/>
        </Route>
        <Route path="/">
          <div className={isMobile ? "mx-3" : "mx-4"}>
            <Header />
            <About />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
