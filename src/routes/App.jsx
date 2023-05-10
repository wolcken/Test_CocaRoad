import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Sector from '../pages/Sector';
import Region from '../pages/Region';
import Login from '../pages/Login';
import '../styles/App.css'
import Modificaciones from '../pages/Modificaciones';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/region' element={<Region />} />
            <Route path='/sector' element={<Sector />} />
            <Route path='/login' element={<Login />} />
            <Route path='/modif' element={<Modificaciones />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
