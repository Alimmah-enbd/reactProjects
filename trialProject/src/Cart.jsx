import React, { Component } from "react";

class Cart extends Component {


  // constructor(props) {
  //   super(props);
  //   this.state = { favoritecolor: "red" };
  // }
  // shouldComponentUpdate() {
    
    
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ favoritecolor: "yellow" })
  //   }, 4000)
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   document.getElementById("div1").innerHTML = "Before Update , the favourite color was " +  prevState.favoritecolor;
  // }

  // componentDidUpdate() {
  //   document.getElementById("div2").innerHTML = "the favourite color is " + this.state.favoritecolor;

  // }

  componentWillUnmount() {
    alert("component dies");
  }

  render() {
    return (
      <div>
        <h1>My Favorite  </h1>
      </div>
    );
  }
}

  


export default Cart;
