import "../styles/Highlights.css";
import OrderOnline from "../pages/OrderOnline";
import greek from "../assets/greek.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import lemon_dessert from "../assets/lemon_dessert.jpg";

function Highlights() {
  return (
    <div className="high">
      <div>
        <h2>This week's specials</h2>
      </div>
      <div className="high-container">
        <div className="st">
          <img src={greek} alt="Greek salad dish"/>
          <div className="dish">
            <h4>Greek Salad</h4>
            <p><b>$ 12.99</b></p>
          </div>
          <p>The famous Greek salad of crispy lettuce, peppers, olives
             and our Chicago style feta cheese, garnished with
             crunchy garlic and rosemary croutons
          </p>
          <a href={<OrderOnline />} class="btn">
            Order a delivery
          </a>
        </div>
        <div className="nd">
          <img src={bruschetta} alt="Bruschetta dish"/>
          <div className="dish">
            <h4>Bruschetta</h4>
            <p><b>$ 5.99</b></p>
          </div>
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
          <div className="dish">
            <h4>Lemon Dessert</h4>
            <p><b>$ 5.00</b></p>
          </div>
          <p>
          This comes straight from andma’s recipe book, every
          las ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <a href={<OrderOnline/>} class="btn">
            Order a delivery
          </a>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
