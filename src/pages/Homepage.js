import HeroBanner from "../components/HeroBanner";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import Chicago from "../components/Chicago";

function Homepage () {
  return (
    <main>
      <HeroBanner />
      <Highlights />
      <Testimonials />
      <Chicago />
    </main>
  );
};

export default Homepage;