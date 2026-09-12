import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Bread from './components/Bread';
import Links from './components/Links';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/bread" />
        </Route>
        <Route exact path={['/links', '/social']}>
          <Redirect to="/social/links" />
        </Route>
        <Route exact path="/social/links" component={Links} />
        <Route path="/bread" component={Bread} />
        <Redirect to="/bread" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
