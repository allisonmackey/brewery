import React from "react";
import Keg from "./Keg";
import PropTypes from 'prop-types';
import {v4} from "uuid";

const kegList = []

function KegList(props){
  return(
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg) => 
      <Keg
        name = {keg.name}
        brand = {keg.brand}
        price = {keg.price}
        alcoholContent = {keg.alcoholContent}
        pintsLeft = {keg.pintsLeft}
        id = {v4()}
        key = {v4()}
      />
      )}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
};

export default KegList;


