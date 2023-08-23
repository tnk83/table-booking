import "../styles/BookingForm.css";
import { useState } from "react";

function Reservations({ availableTimes = [], updateTimes }) {

  const [state, setState] = useState({});
  const { resDate = "", resTime = "17:00", guests = 1, occasion = "Choose Ocassion" } = state;

  const handleChange = (key, value) => {
    setState((state) => ({ ...state, [key]: value }))
    if (key === "resDate") {
        updateTimes(value)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking successful!");
    const data = {
      resDate,
      resTime,
      guests,
      occasion
    }
    console.log(data)
    setState({})
  };

  return (
    <div className="form-container">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>

          <label forHtml="res-date">Choose date<sup>*</sup></label>
          <input
            type="date"
            id="res-date"
            required
            value={resDate}
            onChange={(e) => handleChange("resDate", e.target.value)}
          />

          <label forHtml="res-time">Choose time<sup>*</sup></label>
          <select
            id="res-time"
            required
            value={resTime}
            onChange={(e) => handleChange("resTime", e.target.value)}
          >
            {
              availableTimes?.map(item =>
                <option key={item}>{item}</option>
              )
            }
          </select>

          <label forHtml="guests">Number of guests<sup>*</sup></label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            required
            value={guests}
            onChange={(e) => handleChange("guests", e.target.value)}
          />

          <label forHtml="occassion">Occassion</label>
          <select
            id="occassion"
            value={occasion}
            onChange={(e) => handleChange("occassion", e.target.value)}
          >
            <option>Choose Ocassion</option>
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
            <option>Corporate</option>
          </select>

          <input type="submit" value="Make your reservation"/>
        </fieldset>
      </form>
    </div>
  );
};

export default Reservations;