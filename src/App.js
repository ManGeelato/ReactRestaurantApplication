import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Dishes from './components/Dishes/Dishes';
import OtherMeals from './components/OtherMeals/OtherMeals';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
   
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route  path="/categories" element={<Dishes/>}/>
          <Route  path="/othermeals" element={<OtherMeals/>}/>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
