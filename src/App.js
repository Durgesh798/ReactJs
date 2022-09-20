import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Services from './pages/Services';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/Home' element={<Home />} />
		<Route path='/About' element={<About/>} />
		<Route path='/Contact' element={<Contact/>} />
		<Route path='/Services' element={<Services/>} />
		<Route path='/Products' element={<Products/>} />
	</Routes>
	</Router>
);
}

export default App;
