import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
          <Route path="/" element= {<Homepage />} />
          <Route path="/about" element= {<About />} />
          <Route path="/menu" element= {<Menu />} />
          <Route path="/reservations" element= {<Reservations />} />
          <Route path="/order-online" element= {<OrderOnline />} />
          <Route path="/login" element= {<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
