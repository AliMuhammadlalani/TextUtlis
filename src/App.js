import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }
// const removebodyclass=()=>{
//  document.body.classList.remove('bg-light');
//  document.body.classList.remove('bg-dark');
//  document.body.classList.remove('bg-success');
//  document.body.classList.remove('bg-primary');
//  document.body.classList.remove('bg-warning');
//  document.body.classList.remove('bg-danger');
// }
  const toggleMode=(cls)=>{
    // console.log(cls)
    // removebodyclass();
    // document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor="#1c4160"
      showAlert("DarkMode has been Enabled!","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white"
      showAlert("LightMode has been Enabled!","success");
    }
  }

  return (
  <>
  <BrowserRouter>
   <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert} />
   <div className="container">
   <Routes>
   <Route exact path="/about" element={<About mode={mode} />} />
  <Route exact path="/" element={
  <TextForm heading="Try TextUtils - Word Counter And Character Counter " showAlert={showAlert} mode={mode}/>}/>
   </Routes>
   </div>
   </BrowserRouter>
 </>
  );
}
export default App;
//Props properties hain, apne ek component banaya aur usmai kuch variables pass kiyai hain jo kai coder khud provide karega kiya honge usai props kehte hain toh jese humne compnent banaya navbar jo props provide kiyai hain woh hain title and about aur zaururi nahi srif string pass karain hum objects bhi pass kr sqtai hain, links bhi