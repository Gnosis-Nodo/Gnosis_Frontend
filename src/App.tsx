import './App.css';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/behaviour/ScrollToTop';
import Landing from './components/landing/Landing';
import Login from './components/user/login/Login';
import Header from './components/partials/header/Header';
import Footer from './components/partials/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Pricing from './components/pricing/Pricing';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/pricing' element={ <Pricing /> } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
