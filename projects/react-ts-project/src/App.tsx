import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [alarmStatus, setAlarmStatus] = useState(true);

  useEffect(() => {
    const channel = new BroadcastChannel("alarm_channel");

    channel.onmessage = (event) => {
      setAlarmStatus(event.data);
      if (event.data === false) {
        alert("Alarm False!");
      }
    };

    return () => channel.close();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href="http://localhost/vue"> 뷰로 간다. </a>
        <p>Alarm Status: {alarmStatus ? "True" : "False"}</p>
      </header>
    </div>
  );
}

export default App;
