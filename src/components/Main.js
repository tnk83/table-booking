import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Reservations from "../pages/Reservations";
import OrderOnline from "../pages/OrderOnline";
import Login from "../pages/Login";


const initialTimes = [ "17:00", "18:00", "19:00", "20:00", "21:00" ];

const reducer = (state, action) => {
  switch (action.type) {
    case "Change_Time":
      return state;
    default:
      return state;
  }
};

function Main() {

  const updateTimes = (date) => {
    dispatch({ type: "Change_Time", data: date })
  };
  const [availableTimes, dispatch] = useReducer(reducer, initialTimes);

  return (
    <Routes>
      <Route path="/" element= {<Homepage />} />
      <Route path="/about" element= {<About />} />
      <Route path="/menu" element= {<Menu />} />
      <Route path="/reservations" element= {<Reservations availableTimes={availableTimes} updateTimes={updateTimes}/>} />
      <Route path="/order-online" element= {<OrderOnline />} />
      <Route path="/login" element= {<Login />} />
    </Routes>
  );
};

export default Main;