import "../styles/Homepage.css";
import hero from "../assets/hero.jpg";


function Homepage () {
  return (
    <main>
      <div className="hero-container">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned
             Mediterranean restaurant,
             focused on traditional
             recipes served with a modern
             twist.
          </p>
        </div>
        <div className="hero-image">
          <img
            src={hero}
            alt="Chef holding some bread with things on top"
          />
        </div>
      </div>
      <div className="high">
        <h1>Highlights</h1>
      </div>
      <div className="high-container">
        <div className="st">
          <h1 >First Collumm</h1>
        <p>Culpa et pariatur qui qui sint ea exercitation voluptate est.
          In eiusmod in sit minim voluptate anim ea dolore commodo labori
          consequat sunt ad. Mollit deserunt excepteur cillum voluptate. Duis
          cillum sunt eiusmod Lorem occaecat cupidatat ipsum id ad nisi Lorem duis.
          Lorem cupidatat minim consequat amet mollit ad pariatur. Commodo duis veniam
          ullamco cupidatat. Veniam eu exercitation qui minim consectetur veniam id pariatur
          occaecat aliquip ea tempor sunt sint.
          Dolore qui incididunt irure nostrud irure aute adipisicing enim reprehenderit deserunt
          labore deserunt duis. Qui anim ex aute sit voluptate occaecat enim nisi. Ipsum commodo esse
          anim culpa excepteur esse ex amet. Sunt laborum consequat exercitation fugiat ex dolore sint
          adipisicing ea aute laborum officia esse.
          Lorem est sunt cillum deserunt aliquip pariatur voluptate quis proident Lorem labore sunt. Dolore quis
          ea ea esse. Deserunt ea esse qui fugiat sit duis nulla. Voluptate dolore nisi eu elit cillum sit. Nulla
          qui non cupidatat sunt proident. Qui ex et quis sint Lorem ex. Magna nulla laboris velit sint deserunt
          laboris laboris.
        </p>
        </div>
        <div className="nd">
          <h1>Second Collumm</h1>
        </div>
      </div>
    </main>
  );
};
export default Homepage;