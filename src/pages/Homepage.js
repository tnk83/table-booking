import "../styles/Homepage.css";
import OrderOnline from "./OrderOnline";
import hero from "../assets/hero.jpg";
import greek from "../assets/greek.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import lemon_dessert from "../assets/lemon_dessert.jpg";


function Homepage () {
  return (
    <main>
      <div className="hero-container">
        <div className="hero-banner">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned</p>
            <p>Mediterranean restaurant,</p>
            <p>focused on traditional</p>
            <p>recipes served with a modern</p>
            <p>twist.</p>
            <button>Reserve a Table</button>
          </div>
          <div className="hero-image">
            <img
              src={hero}
              alt="Chef holding some bread with things on top"
            />
          </div>
        </div>
      </div>
      <div className="high">
        <h1>This week's specials</h1>
      </div>
      <div className="high-container">
        <div className="st">
          <img src={greek} alt="Greek salad dish"/>
          <h4>Greek Salad<span>$ 12.99</span></h4>
          <p>The famous Greek salad of crispy lettuce, peppers, olives
             and our Chicago style feta cheese, garnished with
             crunchy garlic and rosemary croutons
          </p>
          <a href={<OrderOnline/>} class="btn">
            Order a delivery
          </a>
        </div>
        <div className="nd">
          <img src={bruschetta} alt="Bruschetta dish"/>
          <h4>Bruschetta<span>$ 5.99</span></h4>
          <p>
            Our Bruschetta is made from grilled bread that has been
            smeared with garlic and seasoned with salt and olive oil.
          </p>
          <a href={<OrderOnline/>} class="btn">
            Order a delivery
          </a>
        </div>
        <div className="rd">
          <img src={lemon_dessert} alt="Lemon dessert dish"/>
          <h4>Lemon Dessert<span>$ 5.00</span></h4>
          <p>
          This comes straight from andma’s recipe book, every
          las ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <a href={<OrderOnline/>} class="btn">
            Order a delivery
          </a>
        </div>
      </div>
    </main>
  );
};
export default Homepage;