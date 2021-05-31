import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Work from './components/Work';
import './css/style.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/registration'>
          <Registration />
        </Route>
        <Route path='/work'>
          <Work />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
