import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { array } from 'prop-types';

const mapStyles = require('../util/mapStyle.json');
const trashcanImage = '/images/tire.jpg';

const locations = [
  {lat: -1.2884, lng: 36.6}, 
  {lat: -1.2884, lng: 36.5}
]

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };



  // const markers = locations.map((location) => (
  //   <Marker
  //     name={'trashcan'}
  //     position={location}  // icon working 
  //     icon={{
  //       url: '/images/tire.jpg',
  //       anchor: new google.maps.Point(0,0),
  //       scaledSize: new google.maps.Size(16,16)}} 
  //     key={location.lat*1000+location.lng}
  //   />  
  // ));

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}  // determine size of starting screen
        style={this.props.mapStyles}
        initialCenter={
          {
            lat: 34.41397173154447,  // starting location
            lng: -119.84892554524039
          }
        }
      >

        {/* <Marker
          onClick={this.onMarkerClick}  // markers
          name={'Dolores park'}
          position={{lat: -1.2884, lng: 36.7}}
        /> */}





        <Marker
          name={'trashcan'}
          position={{lat: 34.41954468838134, lng: -119.85380064974677}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.415749056964245, lng: -119.85220680349721}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.4154017356822, lng: -119.852687964629}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41128338767502, lng: -119.85539449599634}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.4130448745935, lng: -119.85241731149246}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41319373094299, lng: -119.85214665835572}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41225096958855, lng: -119.85211658578498}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.4125486848485, lng: -119.85151513437006}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.413069684003496, lng: -119.85145498922857}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41423571797124, lng: -119.85157527951155}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41339220566352, lng: -119.85067310238917}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41359067991307, lng: -119.85031223154019}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41393800871639, lng: -119.84995136069125}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41510403057806, lng: -119.849981433262}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.415773865572056, lng: -119.85010172354498}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41627003618273, lng: -119.85037237668169}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41689024530633, lng: -119.8502520863987}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41468227986646, lng: -119.84904918356885}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41783295436475, lng: -119.84838758701244}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.418006610137404, lng: -119.84847780472467}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41510403057806, lng: -119.84775606302678}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41299525575149, lng: -119.84916947385183}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41423571797124, lng: -119.84787635330976}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41354106139484, lng: -119.84814700644645}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41329296836212, lng: -119.84820715158797}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.416468503602744, lng: -119.8476357727438}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41609637680386, lng: -119.84685388590437}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41572424834909, lng: -119.84691403104586}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41403724525242, lng: -119.84751548246078}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41272235159411, lng: -119.84796657102198}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.412449446546276, lng: -119.84781620816827}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41197806300265, lng: -119.84787635330976}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.411382627360766, lng: -119.8477861355975}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41569943972656, lng: -119.84655316019692}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41530250076522, lng: -119.84649301505542}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.4161956107788, lng: -119.84595170878197}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41515364816902, lng: -119.8457712733575}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.416666970551724, lng: -119.84556076536226}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.4143597631813, lng: -119.84652308762615}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41418609983569, lng: -119.84616221677722}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41383877206263, lng: -119.84640279734317}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41356587065763, lng: -119.84661330533841}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41289601797909, lng: -119.84652308762615}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41346663356229, lng: -119.84601185392346}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41239982735099, lng: -119.8468839584751}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41200287272906, lng: -119.84682381333361}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41177958492633, lng: -119.8462825070602}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41140743726381, lng: -119.84583141849899}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41225096958855, lng: -119.84507960423035}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41406205436805, lng: -119.84510967680106}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41505441295768, lng: -119.84529011222554}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41331777769852, lng: -119.84417742710794}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.413739535291114, lng: -119.84423757224943}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41267273256072, lng: -119.8442074996787}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41237501774233, lng: -119.84378648368823}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41163072606003, lng: -119.84438793510317}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.4154017356822, lng: -119.84426764482019}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41510403057806, lng: -119.84459844309839}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.4154513530965, lng: -119.84426764482019}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41624522772213, lng: -119.8444180076739}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41597233416958, lng: -119.84423757224943}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.415674631096664, lng: -119.84327524998554}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.4151288393772, lng: -119.84321510484405}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41525288326261, lng: -119.84318503227331}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.415773865572056, lng: -119.84204227458495}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41522807450023, lng: -119.84237307286314}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41488075105451, lng: -119.84135060545779}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41473189770762, lng: -119.8408995168966}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41468227986646, lng: -119.84318503227331}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.413987626999145, lng: -119.84195205687271}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41371472607985, lng: -119.84138067802851}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41386358123711, lng: -119.84354590312228}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41361548916113, lng: -119.84312488713182}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41289601797909, lng: -119.84177162144823}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.4128712085176, lng: -119.84243321800467}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.41220135027553, lng: -119.84249336314616}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.4079339792356, lng: -119.84363612083452}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.40758662549999, lng: -119.843696265976}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        <Marker
          name={'trashcan'}
          position={{lat: 34.40723927032206, lng: -119.8435158305515}}  // icon not working 
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(16,16)}} 
          key={location.lat*1000+location.lng}
        />
        







        
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBy5y5KKrJn-QeG9OF7mMcSGzb9s5w9MJc'
})(MapContainer);