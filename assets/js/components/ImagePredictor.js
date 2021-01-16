import React from 'react'
import { predict, getClass } from '../utils/prediction';

export default class ImagePredictor extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(event) {
    var message = document.getElementById('label');
    var img = document.getElementById('image');
    if(event.target.files.length > 0) {
      let reader = new FileReader();
      reader.onload = () => {
        let dataURL = reader.result;
        img.src = dataURL;
        img.height = 224;
        img.width = 224;
        img.onload = () => {
          message.innerHTML = "Loading..."
          predict(img).then(prediction => {
            message.innerHTML = getClass(prediction);
          })
          
        }
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
            <img id="image" />
            <br />
            <label id="label">Upload an image of your trash and our model will determine the appropriate bin.</label>
            <input type="file" accept="image/*" onChange={this.handleChange}/>
        </form>
    )
  }
}