
import './App.css';
import Registration from './Componets/Registration';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Profile from './pages/Profile.js';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/register' element={<Registration/> }/>
          <Route path='/profile' element={<Profile/> }/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
