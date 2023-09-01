import './Landing.scss';
import duckImage from "../../assets/imgs/Duck.jpeg"
import { Link } from 'react-router-dom';
import Header from '../partials/header/Header';


const Landing = () => { //Logica de programacion

  let pages: string[] = [
    'Landing',
    'Home',
    'Login',
    'Register',
    'Account',
    'Board',
  ];


  return (   //HTML. Solo debe retornar 1 <div></div> o <></> y todo adentro.
    <>
    <Header></Header>
      <h1>Welcome to Gnosis</h1>
      <img src={duckImage} alt="It's-a duck" />

      <ul>
        {pages.map((item, index) => (
          <li key={index}>
            <Link to={item}>{item}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Landing