import './App.css';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/behaviour/ScrollToTop';
import Landing from './components/landing/Landing';
import Login from './components/user/login/Login';
import Header from './components/partials/header/Header';
import Footer from './components/partials/footer/Footer';
import Content from './components/content/Content';
import Contribuite from './components/contribuite/Contribuite';
import Statics from './components/statistics/Statistics';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/content' element={ <Content /> } />
        <Route path='/contribuite' element={<Contribuite/>}/>
        <Route path='/statics' element={<Statics/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
