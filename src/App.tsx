import './App.css';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/behaviour/ScrollToTop';
import Landing from './components/landing/Landing';
import Login from './components/user/login/Login';
import Header from './components/partials/header/Header';
import Footer from './components/partials/footer/Footer';
<<<<<<< HEAD
import Content from './components/content/Content';
=======
import Home from './components/home/Home';
import About from './components/about/About';
import Pricing from './components/pricing/Pricing';
>>>>>>> parent of 9daeb64 (Revert "Lula b")

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/login' element={ <Login /> } />
<<<<<<< HEAD
        <Route path='/content' element={ <Content /> } />
=======
        <Route path='/home' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/pricing' element={ <Pricing /> } />
>>>>>>> parent of 9daeb64 (Revert "Lula b")
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
