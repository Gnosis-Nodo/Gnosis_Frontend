import './Landing.scss';
import MainButton from "../Buttons/MainButton";
import duckImage from "../../assets/imgs/Duck.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';

const Landing = () => { //Logica de programacion

  let name = "Juan Pablo";

  let names = ["JP", "Lu", "Alex", "Luke", "Lu", "Alex", "Luke", "Lu", "Alex", "Luke", "Lu", "Alex", "Luke", "Lu", "Alex", "Luke"];

 


  let modal = () => {
    prompt("This is a modal");
  }



  return (    //HTML. Solo debe retornar 1 <div></div> o <></> y todo adentro.
    <> 
      <h1 className='title'>Hola, esta es la landing</h1>
      <h2> Te saludo: {name}  </h2>
      <h3>: 
        { names.map((name) => `, pero tambien a ${name}`) }
      </h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ipsum odio incidunt quidem omnis saepe odit a fuga adipisci eveniet atque facilis, neque eos nulla? Et itaque eligendi dignissimos accusamus!</p>
      <img src={duckImage} alt="Imagen de un pato" />
      <button onClick={modal}>Modal</button>

      <FontAwesomeIcon icon={faHome} />
      <button>
        <FontAwesomeIcon icon={faBars} className='icon'/>

      </button>

      <MainButton />

    </>
  );
}

export default Landing