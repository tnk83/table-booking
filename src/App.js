import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element= {<Homepage />} />
          <Route path="/about" element= {<About />} />
          <Route path="/menu" element= {<Menu />} />
          <Route path="/reservations" element= {<Reservations />} />
          <Route path="/order-online" element= {<OrderOnline />} />
          <Route path="/login" element= {<Login />} />
      </Routes>
    </div>
  );
}

export default App;
