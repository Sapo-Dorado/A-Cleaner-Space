import React from 'react'
import ImagePredictor from './ImagePredictor'
import { countRequest } from '../utils/count';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "Home",
      count: null
    }
    countRequest('GET').then(count => this.setState({count: count}))

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
        <>
          <p>{this.state.count} Trashcans located</p>
          <button onClick={this.imageView}>Get Started</button>
        </>
      );
    } else {
      content = <ImagePredictor />;
    }
    return content
  }
}