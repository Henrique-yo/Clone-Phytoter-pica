/* eslint-disable react/jsx-pascal-case */
import Header from './componentes/Header';
import Main from './componentes/Main';
import Footer from './componentes/Footer';
import Oleos_essenciais from './componentes/Oleos_essenciais';
import Oleos_vegetais from './componentes/Oleos_vegetais';
import Sinergias from './componentes/Sinergias';
import Cosmeticos_naturais from './componentes/Cosmeticos_naturais';
import Higiene_pessoal from './componentes/Higiene_pessoal';
import Aromatizadores from './componentes/Aromatizadores';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <body>
      <Router>
        <Header/>
          <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/Oleos_ecenciais' element={<Oleos_essenciais/>} />  
          <Route path='/Oleos_vegetais' element={<Oleos_vegetais/>} />  
          <Route path='/Sinergias' element={<Sinergias/>} />  
          <Route path='/Cosmeticos_naturais' element={<Cosmeticos_naturais/>} />  
          <Route path='/Higiene_pessoal' element={<Higiene_pessoal/>} />  
          <Route path='/Aromatizadores' element={<Aromatizadores/>} />  
            
          </Routes>
        <Footer/>
      </Router>
        
    </body>
  );
}

export default App;
