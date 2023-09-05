import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Login from './components/user/login/Login';
import Header from './components/partials/header/Header';
import Footer from './components/partials/footer/Footer';
import Content from './components/content/Content';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/content' element={ <Content /> } />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
