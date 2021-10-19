import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Links from './components/Links';
import Fashion from './components/Fashion';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/links">
          <Links/>
        </Route>
        <Route path="/">
          <Fashion />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
