import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarWrapper from './components/NavbarWrapper';
import Home from './components/Pages/Home';
import Contatti from './components/Pages/Contatti';
import Azienda from "./components/Pages/Azienda"
import Prodotti from './components/Pages/Prodotti';
import CollaboraConNoi from './components/Pages/CollaboraConNoi';
import WorkingInProgress from './components/Pages/WorkingInProgress';
import '../src/index.css';




function App() {
  return (
    <div className="App">
      <Router>
      <NavbarWrapper>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/azienda" element={<Azienda/>}/>
        <Route exact path="/prodotti" element={<Prodotti/>}/>
        <Route exact path="/collabora-con-noi" element={<CollaboraConNoi/>}/>
        <Route exact path="/contatti" element={<Contatti/>}/>
        <Route exact path="/work-in-progress" element={<WorkingInProgress/>}/>
        </Routes>
      </NavbarWrapper>
      <Routes>
        
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
