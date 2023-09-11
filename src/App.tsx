import './App.css';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/behaviour/ScrollToTop';
import Landing from './components/landing/Landing';
import Login from './components/user/login/Login';
import Header from './components/partials/header/Header';
import Footer from './components/partials/footer/Footer';

import Contribuite from './components/contribuite/Contribuite';
import Statics from './components/statistics/Statistics';

import ContentDev from './components/content/ContentDev';
import ContentAudio from './components/content/ContentAudio';
import Home from './components/home/Home';
import Pricing from './components/pricing/Pricing';
import About from './components/about/About';
import PayWall from './components/content/paywall/Paywall';
import Partnership from './components/partnership/Partnership';
import Register from './components/user/register/Register';
import Section from './components/section/Section';
import Account from './components/user/account/Account';
import Playground from './components/playground/Playground';
import SuccessLogin from './components/user/login/SuccessLogin';


function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/contribuite' element={<Contribuite/>}/>
        <Route path='/stats' element={<Statics/>}/>
        <Route path='/content/dev' element={ <ContentDev /> } />
        <Route path='/content/audio' element={ <ContentAudio /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/pricing' element={ <Pricing /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/paywall' element={ <PayWall /> } />
        <Route path='/partnership' element={ <Partnership /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/section' element={ <Section /> } />
        <Route path='/account' element={ <Account /> } />
        <Route path='/playground' element={ <Playground /> } />
        <Route path='/welcome' element={ <SuccessLogin /> } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
