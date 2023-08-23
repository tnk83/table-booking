import "../styles/BookingForm.css";
import { useState } from "react";



function BookingForm() {

  const [formDate, setFormDate] = useState ("date");
  const [formGuests, setFormGuests] = useState ("1");
  const [formOccassions, setFormOccassions] = useState ("Birthday");
  const [availableTimes, setAvailableTimes] = useState ([ "17:00", "18:00", "19:00", "20:00", "21:00" ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking successful!");
    setFormDate("date");
    setAvailableTimes("17:00");
    setFormGuests("1");
    setFormOccassions("Birthday");
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
            value={formDate}
            onChange={(e) => setFormDate(e.target.value)}
          />

          <label forHtml="res-time">Choose time<sup>*</sup></label>
          <select
            id="res-time"
            required
            value={availableTimes}
            onChange={(e) => setAvailableTimes(e.target.value)}
          >
            {availableTimes.map((chooseTime) => (
              <option>{chooseTime}</option>
            ))}
          </select>

          <label forHtml="guests">Number of guests<sup>*</sup></label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            required
            value={formGuests}
            onChange={(e) => setFormGuests(e.target.value)}
          />

          <label forHtml="occassion">Occassion<sup>*</sup></label>
          <select
            id="occassion"
            required
            value={formOccassions}
            onChange={(e) => setFormOccassions(e.target.value)}
          >
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

export default BookingForm;