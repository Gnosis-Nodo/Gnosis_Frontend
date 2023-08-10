import { Link } from 'react-router-dom';
import './Landing.scss';
import MainButton from "../Buttons/MainButton";

const Landing = () => {

  let name = "Juan Pablo";

  let names = ["JP", "Lu", "Alex", "Luke", "Lu", "Alex", "Luke", "Lu", "Alex", "Luke", "Lu", "Alex", "Luke", "Lu", "Alex", "Luke"];

 


  let modal = () => {
    prompt("This is a modal");
  }





  return (
    <> 
      <h1 className='title'>Hola, esta es la landing</h1>
      <h2> Te saludo: {name}  </h2>
      <h3>: 
        { names.map((name) => `, pero tambien a ${name}`) }
      </h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ipsum odio incidunt quidem omnis saepe odit a fuga adipisci eveniet atque facilis, neque eos nulla? Et itaque eligendi dignissimos accusamus!</p>

      <button onClick={modal}>Modal</button>

      <MainButton />

      <Link to="/nav" >Ir a Nav</Link>
    </>
  );
}

export default Landing