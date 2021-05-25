import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/MyNavbar.js';

import Home from './pages/Home.js';
import MyFirstComponents from './pages/MyFirstComponents.js';
import SimpleForm from './pages/SimpleForm.js';
import Footer from './components/Footer.js'

import {
  // BrowserRouter as Router,
  HashRouter as Router,

  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
      </Router>
    </>
  );
}

export default App;
