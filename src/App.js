import logo from './media/logo.svg';
import './App.css';
import { HashRouter as Router, Route, NavLink, Redirect} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Farming from './components/Farming';
import Growing from './components/Growing';
import Future from './components/Future';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavLink exact to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </NavLink>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/about" exact render={() => <About />} />
          <Route path="/farming" exact render={() => <Farming />} />
          <Route path="/growing" exact render={() => <Growing />} />
          <Route path="/future" exact render={() => <Future />} />
        </Router>
      </header>
    </div>
  );
}

export default App;
