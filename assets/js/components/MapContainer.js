import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const trashcanImage = '/images/trashcan.png';

const mapStyles = {
  position: 'relative',
  width: '50%',
  height: '40%',
  left: '50%',
  transform: 'translateX(-50%)'
};

const locations = [
  {lat:34.41954468838134, lng: -119.85380064974677},
  {lat:34.415749056964245, lng: -119.85220680349721},
  {lat:34.4154017356822, lng: -119.85268796462917},
  {lat:34.41128338767502, lng: -119.85539449599634},
  {lat:34.4130448745935, lng: -119.85241731149246},
  {lat:34.41319373094299, lng: -119.85214665835572},
  {lat:34.41225096958855, lng: -119.85211658578498},
  {lat:34.4125486848485, lng: -119.85151513437006},
  {lat:34.413069684003496, lng: -119.85145498922857},
  {lat:34.41423571797124, lng: -119.85157527951155},
  {lat:34.41339220566352, lng: -119.85067310238917},
  {lat:34.41359067991307, lng: -119.85031223154019},
  {lat:34.41393800871639, lng: -119.84995136069125},
  {lat:34.41510403057806, lng: -119.849981433262},
  {lat:34.415773865572056, lng: -119.85010172354498},
  {lat:34.41627003618273, lng: -119.85037237668169},
  {lat:34.41689024530633, lng: -119.8502520863987},
  {lat:34.41468227986646, lng: -119.84904918356885},
  {lat:34.41783295436475, lng: -119.84838758701244},
  {lat:34.418006610137404, lng: -119.84847780472467},
  {lat:34.41510403057806, lng: -119.84775606302678},
  {lat:34.41299525575149, lng: -119.84916947385183},
  {lat:34.41423571797124, lng: -119.84787635330976},
  {lat:34.41354106139484, lng: -119.84814700644645},
  {lat:34.41329296836212, lng: -119.84820715158797},
  {lat:34.416468503602744, lng: -119.8476357727438},
  {lat:34.41609637680386, lng: -119.84685388590437},
  {lat:34.41572424834909, lng: -119.84691403104586},
  {lat:34.41403724525242, lng: -119.84751548246078},
  {lat:34.41272235159411, lng: -119.84796657102198},
  {lat:34.412449446546276, lng: -119.84781620816827},
  {lat:34.41197806300265, lng: -119.84787635330976},
  {lat:34.411382627360766, lng: -119.8477861355975},
  {lat:34.41569943972656, lng: -119.84655316019692},
  {lat:34.41530250076522, lng: -119.84649301505542},
  {lat:34.4161956107788, lng: -119.84595170878197},
  {lat:34.41515364816902, lng: -119.8457712733575},
  {lat:34.416666970551724, lng: -119.84556076536226},
  {lat:34.4143597631813, lng: -119.84652308762615},
  {lat:34.41418609983569, lng: -119.84616221677722},
  {lat:34.41383877206263, lng: -119.84640279734317},
  {lat:34.41356587065763, lng: -119.84661330533841},
  {lat:34.41289601797909, lng: -119.84652308762615},
  {lat:34.41346663356229, lng: -119.84601185392346},
  {lat:34.41239982735099, lng: -119.8468839584751},
  {lat:34.41200287272906, lng: -119.84682381333361},
  {lat:34.41177958492633, lng: -119.8462825070602},
  {lat:34.41140743726381, lng: -119.84583141849899},
  {lat:34.41225096958855, lng: -119.84507960423035},
  {lat:34.41406205436805, lng: -119.84510967680106},
  {lat:34.41505441295768, lng: -119.84529011222554},
  {lat:34.41331777769852, lng: -119.84417742710794},
  {lat:34.413739535291114, lng: -119.84423757224943},
  {lat:34.41267273256072, lng: -119.8442074996787},
  {lat:34.41237501774233, lng: -119.84378648368823},
  {lat:34.41163072606003, lng: -119.84438793510317},
  {lat:34.4154017356822, lng: -119.84426764482019},
  {lat:34.41510403057806, lng: -119.84459844309839},
  {lat:34.4154513530965, lng: -119.84426764482019},
  {lat:34.41624522772213, lng: -119.8444180076739},
  {lat:34.41597233416958, lng: -119.84423757224943},
  {lat:34.415674631096664, lng: -119.84327524998554},
  {lat:34.4151288393772, lng: -119.84321510484405},
  {lat:34.41525288326261, lng: -119.84318503227331},
  {lat:34.415773865572056, lng: -119.84204227458495},
  {lat:34.41522807450023, lng: -119.84237307286314},
  {lat:34.41488075105451, lng: -119.84135060545779},
  {lat:34.41473189770762, lng: -119.8408995168966},
  {lat:34.41468227986646, lng: -119.84318503227331},
  {lat:34.413987626999145, lng: -119.84195205687271},
  {lat:34.41371472607985, lng: -119.84138067802851},
  {lat:34.41386358123711, lng: -119.84354590312228},
  {lat:34.41361548916113, lng: -119.84312488713182},
  {lat:34.41289601797909, lng: -119.84177162144823},
  {lat:34.4128712085176, lng: -119.84243321800467},
  {lat:34.41220135027553, lng: -119.84249336314616},
  {lat:34.4079339792356, lng: -119.84363612083452},
  {lat:34.40758662549999, lng: -119.843696265976},
  {lat:34.40723927032206, lng: -119.8435158305515}
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

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}  // determine size of starting screen
        style={mapStyles}
        initialCenter={
          {
            lat: 34.41397173154447,  // starting location
            lng: -119.84892554524039
          }
        }
      >
      <Marker 
          onClick={this.onMarkerClick} 
          name={'Current Location'} 
      />

        <Marker
          name={'trashcan'}
          position={locations[0]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[0].lat.toString(10)+locations[0].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[1]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[1].lat.toString(10)+locations[1].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[2]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[2].lat.toString(10)+locations[2].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[3]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[3].lat.toString(10)+locations[3].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[4]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[4].lat.toString(10)+locations[4].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[5]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[5].lat.toString(10)+locations[5].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[6]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[6].lat.toString(10)+locations[6].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[7]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[7].lat.toString(10)+locations[7].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[8]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[8].lat.toString(10)+locations[8].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[9]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[9].lat.toString(10)+locations[9].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[10]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[10].lat.toString(10)+locations[10].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[11]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[11].lat.toString(10)+locations[11].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[12]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[12].lat.toString(10)+locations[12].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[13]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[13].lat.toString(10)+locations[13].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[14]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[14].lat.toString(10)+locations[14].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[15]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[15].lat.toString(10)+locations[15].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[16]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[16].lat.toString(10)+locations[16].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[17]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[17].lat.toString(10)+locations[17].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[18]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[18].lat.toString(10)+locations[18].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[19]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[19].lat.toString(10)+locations[19].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[20]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[20].lat.toString(10)+locations[20].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[21]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[21].lat.toString(10)+locations[21].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[22]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[22].lat.toString(10)+locations[22].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[23]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[23].lat.toString(10)+locations[23].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[24]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[24].lat.toString(10)+locations[24].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[25]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[25].lat.toString(10)+locations[25].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[26]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[26].lat.toString(10)+locations[26].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[27]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[27].lat.toString(10)+locations[27].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[28]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[28].lat.toString(10)+locations[28].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[29]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[29].lat.toString(10)+locations[29].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[30]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[30].lat.toString(10)+locations[30].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[31]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[31].lat.toString(10)+locations[31].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[32]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[32].lat.toString(10)+locations[32].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[33]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[33].lat.toString(10)+locations[33].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[34]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[34].lat.toString(10)+locations[34].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[35]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[35].lat.toString(10)+locations[35].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[36]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[36].lat.toString(10)+locations[36].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[37]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[37].lat.toString(10)+locations[37].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[38]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[38].lat.toString(10)+locations[38].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[39]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[39].lat.toString(10)+locations[39].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[40]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[40].lat.toString(10)+locations[40].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[41]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[41].lat.toString(10)+locations[41].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[42]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[42].lat.toString(10)+locations[42].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[43]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[43].lat.toString(10)+locations[43].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[44]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[44].lat.toString(10)+locations[44].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[45]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[45].lat.toString(10)+locations[45].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[46]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[46].lat.toString(10)+locations[46].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[47]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[47].lat.toString(10)+locations[47].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[48]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[48].lat.toString(10)+locations[48].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[49]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[49].lat.toString(10)+locations[49].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[50]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[50].lat.toString(10)+locations[50].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[51]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[51].lat.toString(10)+locations[51].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[52]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[52].lat.toString(10)+locations[52].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[53]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[53].lat.toString(10)+locations[53].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[54]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[54].lat.toString(10)+locations[54].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[55]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[55].lat.toString(10)+locations[55].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[56]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[56].lat.toString(10)+locations[56].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[57]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[57].lat.toString(10)+locations[57].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[58]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[58].lat.toString(10)+locations[58].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[59]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[59].lat.toString(10)+locations[59].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[60]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[60].lat.toString(10)+locations[60].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[61]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[61].lat.toString(10)+locations[61].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[62]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[62].lat.toString(10)+locations[62].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[63]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[63].lat.toString(10)+locations[63].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[64]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[64].lat.toString(10)+locations[64].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[65]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[65].lat.toString(10)+locations[65].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[66]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[66].lat.toString(10)+locations[66].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[67]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[67].lat.toString(10)+locations[67].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[68]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[68].lat.toString(10)+locations[68].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[69]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[69].lat.toString(10)+locations[69].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[70]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[70].lat.toString(10)+locations[70].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[71]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[71].lat.toString(10)+locations[71].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[72]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[72].lat.toString(10)+locations[72].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[73]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[73].lat.toString(10)+locations[73].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[74]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[74].lat.toString(10)+locations[74].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[75]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[75].lat.toString(10)+locations[75].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[76]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[76].lat.toString(10)+locations[76].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[77]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[77].lat.toString(10)+locations[77].lng.toString(10)}
        />
        <Marker
          name={'trashcan'}
          position={locations[78]}   
          icon={{
            url: trashcanImage,
            anchor: new google.maps.Point(0,0),
            scaledSize: new google.maps.Size(32,32)}} 
          key={locations[78].lat.toString(10)+locations[78].lng.toString(10)}
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