import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/econetv2/" element={ <About/> } />
          <Route path="/econetv2/volunteer" element={ <Volunteer/> } />
          <Route path="/econetv2/organizations" element={ <Organizations/> } />
          <Route path="/econetv2/support" element={ <Support/> } />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
