import './App.css';
import {Routes, Route} from 'react-router-dom';

import { Header } from './Components/Header/Header';
import { HeaderLogout } from './Components/Header/HeaderLogout';
// import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { Apply } from './Components/Apply/Apply';
import { Error } from './Components/Error/Error';
import { AdminLogin } from './Components/Admin/AdminLogin';
import { AdminDashboard } from './Components/Admin/AdminDashboard';
import { ApplySuccess } from './Components/Apply/ApplySuccess';
import { AdminApproval } from './Components/Admin/AdminApproval';
import { Dashboard } from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
    
    <HeaderLogout/>

    {/* //Routes logic */}
    <Routes>
      <Route exact path='/home'element={<Home/>} />
      
      <Route path='/register' element={<Register/>} />
      
      <Route path='/login' element={<Login/>} />

      <Route path='/apply' element={<Apply/>} />
      
      <Route path='/apply-success' element={<ApplySuccess/>}/>

        <Route path='/dashboard' element={<Dashboard/>} />

      <Route path='/admin'>
          <Route path='login' element = {<AdminLogin/>} />
          <Route path = 'dashboard' element={ <AdminDashboard/>} />
          <Route path = 'customer/:id' element={<AdminApproval />} />
      </Route>

      <Route element={<Error/>} />
    </Routes>
    {/* <Footer/> */}

    </div>
  );
}

export default App;
