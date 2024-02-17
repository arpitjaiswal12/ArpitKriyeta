
import './App.css';
import Registration from './Componets/Registration';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Profile from './pages/Profile.js';
import SignIn from './pages/SignIn.js';
import Navbar from './Componets/Navbar.js';
import Home from './pages/Home.js';
import Addknowledgebase from './pages/Addknowledgebase.js';
import Productcart from './Componets/Productcart.js';
import AboutUs from './pages/AboutUs.js';

function App() {
  return (
    <div>
      
      
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/register' element={<Registration/> }/>
          <Route path='/profile' element={<Profile/> }/>
          <Route path='/signin' element={<SignIn/> }/>
          <Route path='/home' element={<Home/> }/>
          <Route path='/content' element={<Addknowledgebase/> }/>
          <Route path='/product' element={<Productcart/> }/>
          <Route path='/about' element={<AboutUs/> }/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
