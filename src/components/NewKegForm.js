import React from "react";
import {v4} from 'uuid';

function NewKegForm(props){
  function handleNewKegFormSubmission(event) {
    event.PreventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.price.value);
    console.log(event.target.alcoholContent.value);
 }

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
        <input
        type = 'hidden'
        name = 'pintsLeft'
        value = '124'
        />
        <br/>
        <button type="submit">Add Keg!</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;