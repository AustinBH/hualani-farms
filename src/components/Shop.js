import Card from './Card';
import { Link } from "react-router-dom";
import { useState } from 'react';

function Shop() {

  const [state, setState] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: 0,
    jars: 0
  });

  const handleInputChange = (e) => {
    if (e.target.value < 0) {
      setState((prevProps) => ({
        ...prevProps,
        [e.target.name]: 0
      }));
    } else {
      setState((prevProps) => ({
        ...prevProps,
        [e.target.name]: e.target.value,
      }));
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <div className="card-holder">
        {/* <Card name="" img="" />
        <Card name="" img="" />
        <Card name="" img="" />
        <Card name="" img="" /> */}
      </div>
      <p>New Products Coming Soon!</p>
        <Link exact to="/ingredients" onClick={() => window.scroll(0, 0)}>
          <button>
            INGREDIENTS
          </button>
        </Link>
    </div>
  );
}

export default Shop;
