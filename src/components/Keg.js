import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  // function buyPint(){
  //   props.buy(props.index)
  // }
  return(
    <React.Fragment>
      <h3>{props.name} - {props.brand}</h3>
      <p>Price: ${props.price}.00 {props.alcoholContent}% per pint</p> 
      <p>Pints Left: {props.pintsLeft}</p>
      <br/>
      {/* <button onClick={buyPint}>Buy Pint</button> */}
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  pintsLeft: PropTypes.number,
  alcoholContent: PropTypes.number
}
export default Keg;
