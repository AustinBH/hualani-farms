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
      {/* Adding this to hide product info while ironing out issues, still need backend integration*/}
      <div className="card-holder" style={{ display: "none" }}>
        <Card
          name="Signature Scent"
          img="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/cards/original_scent.jpg"
          info="Our Signature Scent has top notes of fresh lavender and wild harvested coastal sea grasses found growing near our farm on the beaches at Koki and Hamoa. A light scent embodies the sprit of aloha and helps alleviate stress."
          inStock={false}
        />
        <Card
          name="Summer Breeze"
          img="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/cards/summer_scent.JPG"
          info="Our Summer Breeze scent comes with a fresh scent of pink grapefruit and lime blossom. A light, delicate scent perfect for Summer, infusing essential oil of pink grapefruit and crushed lime blossom. Delightful!"
          inStock={true}
        />
        <Card
          name="Magnolia"
          img="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/cards/magnolia.JPG"
          info="There really is nothing else like it. Fresh, delicate, lemony scent of the Magnolia blossom from our own tree growing at Hualani Farms. Bees simply love it! And your skin will be glowing and nourished."
          inStock={true}
        />
        <Card
          name="Vanilla Absolute"
          img="https://hualani-farms-bucket.s3.us-west-2.amazonaws.com/cards/vanilla_vine.jpg"
          info="A glorious infusion taken from the vanilla orchid vine."
          inStock={true}
        />
        <Card
          name="Invigorating Spice"
          img="https://www.readree.com/wp-content/uploads/2021/01/Search-Engines-That-Search-for-Duplicate-images.jpg"
          info="A made to order blend of pink and black pepper oils and coriander can be created especially for you. Please allow up to 2 weeks to create as this blend is made in single batch only."
          inStock={true}
        />
      </div>
      <p>New Products Coming Soon!</p>
      <Link to="/ingredients" onClick={() => window.scroll(0, 0)}>
        <button>INGREDIENTS</button>
      </Link>
    </div>
  );
}

export default Shop;
