import logo from './media/logo.svg';
import './App.css';
import { HashRouter as Router, Route, NavLink, Redirect} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavLink exact to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </NavLink>
          <Route path="/about" exact render={() => <About />} />
          <Route path="/" exact render={() => <Home />} />
        </Router>
      </header>
    </div>
  );
}

export default App;
