import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';


function App() {
  return (
    <Router>
      <Switch>
        {/* The line below needs to be changed depending on gh-pages or 
        actual domain */}
        <Route path='/' component={Home} exact />
        <Route path='/contact' component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
