import dice1 from './assets/주사위1.jpg';

function Dice(props) {
  console.log(props);
  return <img src={dice1} alt="주사위1" />
}

export default Dice;