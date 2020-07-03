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
      {kegList.map((keg, index) => 
      <Keg
        name = {keg.name}
        brand = {keg.brand}
        price = {keg.price}
        alcoholContent = {keg.alcoholContent}
        pintsLeft = {keg.pintsLeft}
        buy = {buyPintClick}
        id = {index}
        key = {v4()}
      />
      )}
    </React.Fragment>
  );
}

function buyPintClick(id){
  const currentPints = [...kegList];
  if (currentPints[id].pintsLeft <= 1 || isNaN(currentPints[id].pintsLeft)) {
    kegList[id].pintsLeft = "Out of Stock"
  } else {
    kegList[id].pintsLeft -= 1;
  }
}

KegList.propTypes = {
  kegList: PropTypes.array,
};

export default KegList;


