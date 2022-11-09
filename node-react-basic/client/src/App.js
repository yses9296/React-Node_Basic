import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import NavBar from './components/views/NavBar/NavBar';
import Footer from './components/views/Footer/Footer';



function App() {
  return (
    <Router>
      <div>
        <h1>React Router</h1>
      
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/login*" element={<LoginPage/>}> </Route>
          <Route path="/register" element={<RegisterPage/>}> </Route>
          <Route path="/navbar" element={<NavBar/>}> </Route>
          <Route path="/footer" element={<Footer/>}> </Route>
        </Routes>
      </div>
      </Router>
  );


}

export default App;
