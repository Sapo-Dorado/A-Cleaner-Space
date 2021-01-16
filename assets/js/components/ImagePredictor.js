import React from 'react'
import { predict, getCategory, getType} from '../utils/prediction';
import { countRequest } from '../utils/count';

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
            let category = getCategory(prediction);
            message.innerHTML = `
            <strong> Our prediction: </strong>${category}
            <br />
            <strong>Bin: </strong>${getType(category)}
            `;
            countRequest('PATCH')
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
      <div className="imgformcontainer">
        <form onSubmit={this.handleSubmit}>
          <img id="image" />
          <br />
          <p id="label" className="imglabel">
            <strong>
              Upload an image of your trash and
              <br />
              our model will determine the appropriate bin.
            </strong>
          </p>
          <br />
          <label className="btn">
            Upload Image
            <input type="file" accept="image/*" onChange={this.handleChange}/>
          </label>
        </form>
      </div>
    )
  }
}