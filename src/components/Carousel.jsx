import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
console.log("images: ", images);
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(props) {
    super(props);

    //set an initial state
    this.state = {
      currIndex: 0,
    };

    // this.decreaseCount = this.decreaseCount.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  increaseCount = () => {
    console.log("increase count");

    //if index is > length of image -1 then bring it back to 0th index
    if (this.state.currIndex == images.length - 1) {
      this.setState({
        currIndex: 0,
      });
    } else {
      this.setState({
        currIndex: this.state.currIndex + 1, // otherwise increase it by 1
      });
    }
  };

  decreaseCount = () => {
    //if index is == 0 then bring it to the last index
    if (this.state.currIndex == 0) {
      this.setState({
        currIndex: images.length - 1,
      });
    } else {
      this.setState({
        currIndex: this.state.currIndex - 1, // otherwise decrease it by 1
      });
    }
  };

  componentDidMount(){
    console.log("hi");
  }

  render() {
    return (
      <>
        <h1>Carousel</h1>
        <div className="carousel-container flex">
          <div className="leftArrow arrowDiv flex" onClick={this.decreaseCount}>
            <ArrowBackIosIcon />
          </div>
          <h2 className="title">{images[this.state.currIndex].title}</h2>
          <img src={images[this.state.currIndex].img} alt="" />
          <h4 className="caption">{images[this.state.currIndex].subtitle}</h4>
          <div
            className="rightArrow arrowDiv flex"
            onClick={this.increaseCount}
          >
            <ArrowForwardIosIcon />
          </div>
        </div>
      </>
    );
  }
}

export default Carousel;
