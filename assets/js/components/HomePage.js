import React from 'react'
import ImagePredictor from './ImagePredictor'
import { countRequest } from '../utils/count'
import MapContainer from './MapContainer'

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
          <div className="title">
              <h1>A Cleaner Space</h1>
          </div>
          <div className="startbtn">
            <button onClick={this.imageView} className="btn">Get Started</button>
            <p><strong>{this.state.count} Trashcans located</strong></p>
          </div>
        </>
      );
    } else {
      content = (
        <>
          <div className="imgprocessing">
            <ImagePredictor />
          </div>
          <MapContainer />
        </>
      );
    }
    return content
  }
}