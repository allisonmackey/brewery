import React from "react";
import {v4} from 'uuid';

function NewKegForm(){
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
        type = 'number'
        name = 'price'
        placeholder = 'Price'/>
        <br/>
        <input
        type = 'number'
        name = 'pintsLeft'
        placeholder = 'Pints Left'
        />
        <br/>
        <button type="submit">Add Keg!</button>
      </form>
    </React.Fragment>
  );
}