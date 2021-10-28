import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Links from './components/Links';
// import Fashion from './components/Fashion';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        {/* TODO: Update routes when rest of site is built out
        <Route exact path="/links">
          <Links/>
        </Route>
        <Route path="/">
          <Fashion />
        </Route> */}
        <Route path="/">
          <Links/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
