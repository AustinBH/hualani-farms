import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
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
          <Route path="/" exact render={() => <Home />} />
          <Route path="/about" exact render={() => <About />} />
          <Route path="/farming" exact render={() => <Farming />} />
          <Route path="/growing" exact render={() => <Growing />} />
          <Route path="/plans" exact render={() => <Plans />} />
          <Route path="/shop" exact render={() => <Shop />} />
          <Route path="/contact" exact render={() => <Contact />} />
          <Route path="/packaging" exact render={() => <Packaging />} />
          <Route path="/ingredients" exact render={() => <Ingredients />} />
        </div>
      </Router>
      <p className="quote">
        Made with meticulous care and abundant aloha.<br/>
        © 2021 Hualani Farms LLC
      </p>
    </div>
  );
}

export default App;
