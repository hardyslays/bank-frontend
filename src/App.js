import './App.css';
import {Routes, Route} from 'react-router-dom';

import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { Apply } from './Components/Apply/Apply';
import { Error } from './Components/Error/Error';

function App() {
  return (
    <div className="App">
    
    {/* <Navbar/> */}

    {/* //Routes logic */}
    <Routes>
      <Route path='/'element={<Home/>} />
      
      <Route path='/register' element={<Register/>} />
      
      <Route path='/login' element={<Login/>} />

      <Route path='/apply' element={<Apply/>} />

      <Route element={<Error/>} />
    </Routes>
    {/* <Footer/> */}

    </div>
  );
}

export default App;
