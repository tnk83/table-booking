import "../styles/HeroBanner.css";
import hero from "../assets/hero.jpg";

export default function HeroBanner() {
  return (
    <div className="hero-container">
        <div className="hero-banner">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned
              Mediterranean restaurant,
              focused on traditional
              recipes served with a modern
              twist.
            </p>
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
  );
};
