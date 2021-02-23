import logo from './logo.svg';
// import photo1 from './photo1.png';
// import photo2 from './photo2.png';
// import photo3 from './photo3.png';
// import photo4 from './photo4.png';
import './App.css';
import { HashRouter as Router, Route, NavLink, Redirect} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <NavLink exact to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </NavLink>
        </header>
        <Route path="/about" exact render={() => <About />} />
        <Route path="/" exact render={() => <Home />} />
      </Router>
    </div>
  );
}

export default App;
