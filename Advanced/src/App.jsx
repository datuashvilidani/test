import { useState } from "react";
import icon from "/images/icon.svg";
import "./app.css";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const calculateAge = () => {
    if (!day || !month || !year) return;

    const today = new Date();
    const birth = new Date(year, month, day); 

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="main">
      <div className="inputs">
        <div>
          <p>DAY</p>
          <input
            type="number"
            placeholder="DD"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div>
          <p>MONTH</p>
          <input
            type="number"
            placeholder="MM"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>
        <div>
          <p>YEAR</p>
          <input
            type="number"
            placeholder="YYYY"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
      </div>

      <div className="hrButton">
        <hr />
        <button onClick={calculateAge}>
          <img src={icon} alt="" />
        </button>
      </div>

      <div className="result">
        <p>
          <span>{age.years || "--"}</span> years
        </p>
        <p>
          <span>{age.months || "--"}</span> months
        </p>
        <p>
          <span>{age.days || "--"}</span> days
        </p>
      </div>
    </div>
  );
}

export default App;