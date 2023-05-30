import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Layout from './layout';
import Home from './pages/home/home';
import About from './pages/about/About';
import Planing from './pages/planing/Planing';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Planing />} />
      </Routes>
    </Layout>
  );
}

export default App;
