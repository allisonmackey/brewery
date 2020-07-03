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
        whenKegClicked = {props.onKegSelection}
        buy = {props.buyingPint} 
        name = {keg.name}
        brand = {keg.brand}
        price = {keg.price}
        alcoholContent = {keg.alcoholContent}
        pintsLeft = {keg.pintsLeft}
        id = {keg.id}
        index = {index}
        key = {keg.id}
      />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  whenKegClicked: PropTypes.func,
  buy: PropTypes.func
}
export default KegList;


