import React from "react";
import PropTypes from 'prop-types';
import {v4} from 'uuid';

function NewKegForm(props){

  return(
    <React.Fragment>
      <form onSubmit = {handleNewKegFormSubmission}>
        <input
        type = 'text'
        name = 'name'
        placeholder = 'Beer Name'/>
        <br/>
        <input
        type = 'text'
        name = 'brand'
        placeholder = 'Brand'/>
        <br/>
        <input
        type = 'number'
        name = 'price'
        placeholder = 'Price'/>
        <br/>
        <input
        type = 'number'
        name = 'alcoholContent'
        placeholder = 'Alcohol Content'/>
        <br/>
        <button type="submit">Add Keg!</button>
      </form>
    </React.Fragment>
  );
  function handleNewKegFormSubmission(event) {
    event.PreventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pintsLeft: 124,
      id: v4()
    });
  }
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;