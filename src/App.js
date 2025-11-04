import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Card from './Components/Card';


function App() {
  return (
    <Router>
      <Header/>
    
      <Footer />
    </Router>
  );
}

export default App;
