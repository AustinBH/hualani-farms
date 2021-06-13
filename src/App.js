import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Farming from './components/Farming';
import Growing from './components/Growing';
import Plans from './components/Plans';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Packaging from './components/Packaging';
import Ingredients from './components/Ingredients';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="app-info">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/farming">
              <Farming />
            </Route>
            <Route path="/growing">
              <Growing />
            </Route>
            <Route path="/plans">
              <Plans />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/packaging">
              <Packaging />
            </Route>
            <Route path="/ingredients">
              <Ingredients />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <p className="quote">
        Made with meticulous care and abundant aloha.
        <br />© 2021 Hualani Farms LLC
      </p>
    </div>
  );
}

export default App;
