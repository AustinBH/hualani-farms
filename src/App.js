import './App.css';
import { HashRouter as Router, Route, NavLink, Redirect} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Farming from './components/Farming';
import Growing from './components/Growing';
import Future from './components/Future';
import Preorder from './components/Preorder';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
        <Router>
          <Navbar />
          <div className="app-info">
            <Route path="/" exact render={() => <Home />} />
            <Route path="/about" exact render={() => <About />} />
            <Route path="/farming" exact render={() => <Farming />} />
            <Route path="/growing" exact render={() => <Growing />} />
            <Route path="/future" exact render={() => <Future />} />
            <Route path="/preorder" exact render={() => <Preorder />} />
            <Route path="/contact" exact render={() => <Contact />} />
          </div>
        </Router>
    </div>
  );
}

export default App;
