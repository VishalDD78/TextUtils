import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }

  const toggleMode = (cls) => {

    removeBodyClasses();
    document.body.classList.add('bg-' + cls);

    // if (cls === "light") {
    //   setMode('dark');
    //   document.body.style.backgroundColor = 'black';
    //   showAlert("Dark Mode has been enabled", "danger");
    // } else if (cls === "dark") {
    //   setMode('light');
    //   document.body.style.backgroundColor = 'white';
    //   showAlert("Dark Mode has been disabled", "success");
    // }

    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "danger");
      // document.title = "Vi";

      // setInterval(() => {
      //   document.title = "Vish";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Vishal";
      // }, 1500);
    } else if (mode === "dark") {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode has been disabled", "success");
      // document.title = "Text-Utils Light Mode";
    }
  }

  return (
    <>
      {/* <Router> */}

      <Navbar title="TextUtils" abouText="About US" homeText="Home" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} headingText="Enter the text to analyze" mode={mode} />} />
          </Routes> */}
        <TextForm showAlert={showAlert} headingText="Enter the text to analyze" mode={mode} />
      </div>

      {/* </Router> */}
    </>
  );
}

export default App;
