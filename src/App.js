import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RegisterPage } from './RegisterPage';
import { AppPage } from './AppPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/users/showlogin">
            <LoginPage />
          </Route>
          <Route path="/users/showregister">
            <RegisterPage />
          </Route>
          <Route path="/app">
            <AppPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
