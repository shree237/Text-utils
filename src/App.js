
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React,{useState} from 'react';
// import {BrowserRouter as Router,Route,Link,Routes} from "react-router-dom";




function App() {

const [mode, setMode] = useState('light')
const [alert, setAlert] = useState(null)

const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 2000);
}




const toggleMode = ()=> {
  if(mode==='light'){
    setMode('dark')
    // document.body.style.backgroundColor = '#35383b'
    document.body.style.backgroundColor = '#042743'
    showAlert('dark mode is enabled', 'success')
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert('light mode is enabled', 'success')
  }
}



  return (
   <>   
      {/* <Router> */}
        <Navbar title="Text-utiles" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          <Textform showAlert={showAlert} heading="Enter text you have to utilize" mode={mode} />
        
          {/* users --> component 1 
          users/home --> component 2 
          React do partial matching, you have to write exact for complete matching */}

          {/* <Routes>
            <Route exact path="/About" element={<About />} /> 
           <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter text you have to utilize" mode={mode} />} />
          </Routes> */}
        </div>
      {/* </Router> */}
   </>
  );
}

export default App;
