import './App.css';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/behaviour/ScrollToTop';
import Landing from './components/landing/Landing';
import Login from './components/user/login/Login';
import Header from './components/partials/header/Header';
import Footer from './components/partials/footer/Footer';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
