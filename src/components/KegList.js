import React from "react";
import Keg from "./Keg";
import PropTypes from 'prop-types';
import {v4} from "uuid";

class KegList extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      formVisibleOnPage: null,
      kegList: [
        { name: "beer1",
          brand: "brand1",
          price: 85,
          alcoholContent: 6,
          pintsLeft: 124
        },
        { name: "beer2",
          brand: "brand2",
          price: 85,
          alcoholContent: 6,
          pintsLeft: 124
        },
        { name: "beer3",
          brand: "brand3",
          price: 85,
          alcoholContent: 6,
          pintsLeft: 124
        },
        { name: "beer4",
          brand: "brand4",
          price: 85,
          alcoholContent: 6,
          pintsLeft: 124
        }
      ]
    };
    this.buyPintClick = this.buyPintClick.bind(this)
  }

  handleAddingNewKegToList = (newKeg) => {
    const newKegList = this.state.kegList.concat(newKeg);
    this.setState({kegList: newKegList})
  }
    
  buyPintClick(index){
    const currentPints = [...this.state.kegList];
    if (currentPints[index].pintsLeft <= 1 || isNaN(currentPints[index].pintsLeft)) {
      currentPints[index].pintsLeft = "Out of Stock";
      this.setState({ kegList: currentPints});
    } else {
      currentPints[index].pintsLeft -= 1;
      this.setState({ kegList: currentPints});
    }
  }

  render() {

    return(
      <React.Fragment>
        <hr/>
        {this.state.kegList.map((keg, index) => 
        <Keg
          name = {keg.name}
          brand = {keg.brand}
          price = {keg.price}
          alcoholContent = {keg.alcoholContent}
          pintsLeft = {keg.pintsLeft}
          buy = {this.buyPintClick}
          id = {v4()}
          index = {index}
          key = {v4()}
        />
        )}
      </React.Fragment>
    );
  } 
}

KegList.propTypes = {
  kegList: PropTypes.array,
}
export default KegList;


