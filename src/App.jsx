import React, { useState } from "react";
export default function App() {
  const [dat, setDat] = useState("00 : 00 : 00");
  const [symbolTime, setSymbolTime] = useState("AM");
  const daysOfWeekAbbreviations = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthAbbreviations = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let date = new Date();

  let thisDay = daysOfWeekAbbreviations[date.getDay()]; //tue
  let todayNumber = date.getDate(); // 03

  let month = monthAbbreviations[date.getMonth()]; //sep
  let year = date.getFullYear(); // 2024

  let interval = setInterval(() => {
    let date = new Date();

    let hour = date.getHours();
    if (hour > 12) {
      hour = hour - 12;
      setSymbolTime("PM");
    }
    let min = date.getMinutes();
    let sec = date.getSeconds();
    return setDat(`${hour > 9 ? hour : "0" + hour} : ${min > 9 ? min : "0" + min} : ${sec > 9 ? sec : "0" + sec}`);
  }, 1000);

  return (
    <div className="digital-clock text-center m-auto position-absolute  ">
      <div className="clock ">
        <div className="time fs-1  fw-bold">
          <span className="time-content">{dat} </span>
          <span className="symbolTime">{symbolTime}</span>
        </div>
        <div className="date">
          <p className="m-0">
            {thisDay}, {todayNumber} {month} {year}
          </p>
        </div>
      </div>
      <h3>DigitalClock - By Sherif Fathy</h3>
    </div>
  );
}
