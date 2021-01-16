import React from 'react'
import ImagePredictor from './ImagePredictor'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "Home"
    }

    this.imageView = this.imageView.bind(this);
  }

  imageView() {
    this.setState({
      view: "Image"
    })
  }

  render() {
    var content;
    if(this.state.view === "Home"){
      content = (
        <button onClick={this.imageView}>Get Started</button>
      );
    } else {
      content = <ImagePredictor />;
    }
    return content
  }
}