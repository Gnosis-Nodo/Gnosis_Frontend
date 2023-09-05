import './App.css';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/behaviour/ScrollToTop';
import Landing from './components/landing/Landing';
import Login from './components/user/login/Login';
import Header from './components/partials/header/Header';
import Footer from './components/partials/footer/Footer';
import ContentDev from './components/content/ContentDev';
import ContentAudio from './components/content/ContentAudio';
import Home from './components/home/Home';
import Pricing from './components/pricing/Pricing';
import About from './components/about/About';
import PayWall from './components/content/paywall/PayWall';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/content/dev' element={ <ContentDev /> } />
        <Route path='/content/audio' element={ <ContentAudio /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/pricing' element={ <Pricing /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/paywall' element={ <PayWall /> } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
