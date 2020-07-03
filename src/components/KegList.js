import React from "react";
import Keg from "./Keg";
import PropTypes from 'prop-types';
import {v4} from "uuid";

const kegList = [
  { name: "beer1",
    brand: "brand1",
    price: 85,
    alcoholContent: 6,
    pintsLeft: 124,
  },
  { name: "beer2",
  brand: "brand2",
  price: 85,
  alcoholContent: 6,
  pintsLeft: 124,
  },
  { name: "beer3",
  brand: "brand3",
  price: 85,
  alcoholContent: 6,
  pintsLeft: 124,
  },
  { name: "beer4",
  brand: "brand4",
  price: 85,
  alcoholContent: 6,
  pintsLeft: 124,
  }
]

function KegList(props){
  return(
    <React.Fragment>
      <hr/>
      {kegList.map((keg) => 
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
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
};

export default KegList;


