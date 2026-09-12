import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Bread from './pages/Bread';
import SocialLinks from './pages/SocialLinks';

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
        <Route exact path="/social/links" component={SocialLinks} />
        <Route path="/bread" component={Bread} />
        <Redirect to="/bread" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
