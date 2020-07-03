import React from "react";
import LandingPage from "./LandingPage";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
// import Keg from "./Keg";


class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: "landing-page"
    }
  }

  landingPageButtonClick = () => {
    this.setState({
      formVisibleOnPage: "landing-page"
    })
  }

  kegListButtonClick = () => {
    this.setState({
      formVisibleOnPage: "keg-list"
    })
  }

  addKegButtonClick = () => {
    this.setState({
      formVisibleOnPage: "add-keg"
    })
  }


  render () {
    let currentVisibleState = null;
    let button1 = null;
    let button1Text = null;
    let button2 = null;
    // let button2Text = null;

    if (this.state.formVisibleOnPage === 'landing-page') {
      currentVisibleState = <LandingPage/>;
      button1 = this.kegListButtonClick;
      button1Text = "View Our Keg List"
    } 
    else if (this.state.formVisibleOnPage === 'keg-list') {
      currentVisibleState = <KegList/>
      button1 = this.landingPageButtonClick; 
      button1Text = "View Home Page";
      button2 = <button onClick={this.addKegButtonClick}>Add Keg</button>
    }
    else if (this.state.formVisibleOnPage === "add-keg") {
      currentVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      button1 = this.kegListButtonClick;
      button1Text = "Return to Keg List"
    } 
    // else 
    //   currentVisibleState = <KegList/>
    //   button1 = this.landingPageButtonClick;
    //   button1Text = "View Home Page"
    return(
      <React.Fragment>
        {currentVisibleState}
        <button onClick={button1}>{button1Text}</button>
        {button2}
      </React.Fragment>
    );
  }

}

export default KegControl;