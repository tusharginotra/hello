//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import React from 'react';
import list from './components/list';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert,setalert] = useState(null)
  const showAlert=(message,type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#042743'
      
      showAlert("Dark mode has been enabled","success")
      /*  setInterval(() => {
          document.title="This is amazing"
        }, 2000);
        setInterval(() => {
          document.title="HealthQueen-Home"
        }, 1500);
        */
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")

    }
  }
  return (
    <>
    <Router>
     <Navbar title = "HealthQueen" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert} />
    <div className="container my -3">    
      
        <Routes>
            <Route path="/About" element={<About mode={mode} />}>
            </Route>
            <Route path="/List" element={<list />}>
            </Route>
            <Route path="/TextForm" element={<TextForm heading="Try Text Utils: Work Counter, Character Counter,Remove Extra spaces"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
     </div>
    
     </Router>
    
     </>
  );
}

export default App;
