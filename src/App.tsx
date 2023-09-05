import './App.css';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/behaviour/ScrollToTop';
import Landing from './components/landing/Landing';
import Login from './components/user/login/Login';
import Header from './components/partials/header/Header';
import Footer from './components/partials/footer/Footer';
import Content from './components/content/Content';
import Home from './components/home/Home';
import Pricing from './components/pricing/Pricing';
import About from './components/about/About';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/content' element={ <Content /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/pricing' element={ <Pricing /> } />
        <Route path='/about' element={ <About /> } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
