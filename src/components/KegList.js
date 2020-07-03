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
        name = {keg.name}
        brand = {keg.brand}
        price = {keg.price}
        alcoholContent = {keg.alcoholContent}
        pintsLeft = {keg.pintsLeft}
        id = {v4()}
        index = {index}
        key = {v4()}
      />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  whenKegClicked: PropTypes.func
  // buyPintClick: PropTypes.func
}
export default KegList;


