import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Farming from './components/Farming';
import Growing from './components/Growing';
import Plans from './components/Plans';
import Preorder from './components/Preorder';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Packaging from './components/Packaging';

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
            <Route path="/plans" exact render={() => <Plans />} />
            <Route path="/preorder" exact render={() => <Preorder />} />
            <Route path="/contact" exact render={() => <Contact />} />
            <Route path="/packaging" exact render={() => <Packaging />} />
          </div>
        </Router>
        <p className="quote">
          © 2021 Hualani Farms LLC
        </p>
    </div>
  );
}

export default App;
