import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Login from './components/user/login/Login';
import Header from './components/partials/header/Header';
import Footer from './components/partials/footer/Footer';
import Register from './components/user/register/Register';
import Section from './components/section/Section';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/section' element={ <Section /> } />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
