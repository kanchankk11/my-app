import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState("light");
  const [textMode, setTextMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type: type
    });

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const changeBackGround = (value) => {
    document.body.style.backgroundColor = value;
  }
  const toggleMode = ()=>{
    if(mode == 'light'){
      setMode("dark");
      document.body.style.backgroundColor = "#212930";
      document.body.style.color="white";
      showAlert("DarkMode is enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor ="white";
      document.body.style.color="black";
      showAlert("DarkMode is disabled", "success");
    }
  }
  return (
    <>
    <Router>
        <Navbar title = "React JS" mode={mode} toggleMode={toggleMode} textMode={textMode} changeBackGround={changeBackGround}/>
        <Alert alert={alert}/>
        <Routes>
            
            <Route path='/about' element={<About mode={mode}/>} />

            <Route path="/" element={<TextForm heading = "Enter your text" mode={mode} showAlert={showAlert}/>}/>
            
          </Routes>
          <Footer />
    </Router>
   </>
  );
}

export default App;
