import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';

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
import { DashboardPage } from './Components/Dashboard/DashboardPage';
import Auth from './Services/Auth'


function App() {

  const { getToken } = Auth();

  const LoggedInRoutes = () => {
    return (
      <>
      <Routes>
        <Route path='/dashboard' element={<DashboardPage/>} />

        <Route path='/admin'>
            <Route path='login' element = {<AdminLogin/>} />
            <Route path = 'dashboard' element={ <AdminDashboard/>} />
            <Route path = 'customer/:id' element={<AdminApproval />} />
        </Route>

        <Route element={<Error/>} />
      </Routes>
      </>
    )
  }


  return (
    <div className="App">
      <>
      <HeaderLogout/>
<<<<<<< HEAD
=======
      {!!getToken()?'1':'0'}
>>>>>>> 8dc0bd17f1237a06e75b013ce5863773bd471aff
    {/* //Routes logic */}

      {/* {getToken()&&LoggedInRoutes()} */}
      {LoggedInRoutes()}
      <Routes>
        <Route exact path='/home'element={<Home/>} />
        
        <Route path='/register' element={<Register/>} />
        
        <Route path='/login' element={<Login/>} />

        <Route path='/apply' element={<Apply/>} />
        
        <Route path='/apply-success' element={<ApplySuccess/>}/>

<<<<<<< HEAD
        {/* <Route path='*' element={<Navigate to={'/home'}/>} /> */}
=======
        <Route path='*' element={<Navigate to={'/home'}/>} />
>>>>>>> 8dc0bd17f1237a06e75b013ce5863773bd471aff
      </Routes>
      </>
    

    
    


    </div>
  );
}

export default App;
