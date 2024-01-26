
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Joinin from './Pages/joinin.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/join' element={<Joinin/>}/>

        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
