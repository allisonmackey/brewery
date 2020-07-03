import React from "react";
import Keg from "./Keg";
import PropTypes from 'prop-types';
import {v4} from "uuid";

function KegList(props){
  return(
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg, index) => 
      <Keg
        name = {keg.name}
        brand = {keg.brand}
        price = {keg.price}
        alcoholContent = {keg.alcoholContent}
        pintsLeft = {keg.pintsLeft}
        buy = {buyPintClick}
        id = {v4()}
        index = {index}
        key = {v4()}
      />
      )}
    </React.Fragment>
  ); 
  function buyPintClick(index){
    const currentPints = [...props.kegList];
    if (currentPints[index].pintsLeft <= 1 || isNaN(currentPints[index].pintsLeft)) {
      currentPints[index].pintsLeft = "Out of Stock";
      props.kegList = currentPints;
    } else {
      currentPints[index].pintsLeft -= 1;
      props.kegList = currentPints;
    }
  }
}

KegList.propTypes = {
  kegList: PropTypes.array,
  buyPintClick: PropTypes.func
}
export default KegList;


