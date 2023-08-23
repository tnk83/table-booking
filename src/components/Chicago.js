import "../styles/Chicago.css";
import marioAA from "../assets/marioAA.jpg";
import marioBB from "../assets/marioBB.jpg"

function Chicago() {
  return (
    <div className="container-chicago">
      <div className="text-chicago">
        <h2>Litte Lemon</h2>
        <h3>Chicago</h3>
        <p>Little Lemon is a charming neighborhood bistro
           that serves simple food and clasic cocktails in a
           lively but casual environment. The restaurant
           features a locally-sourced menu with daily specials.
        </p>
      </div>
      <div className="container-image">
        <div className="image-box1">
          <img className="image-mario1"
            src={marioAA}
            alt="Mario and Adrian discussing a new recipe"
          />
        </div>
        <div className="image-box2">
          <img className="image-mario2 laughing together"
            src={marioBB}
            alt="Mario and Adrian"
          />
        </div>
      </div>
    </div>
  );
};

export default Chicago;