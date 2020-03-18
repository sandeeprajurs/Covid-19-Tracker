import React, { Component } from "react"
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import "../../style/map.css";
import * as countriesJson from "../../lat_long_details/lat_long3.json";

// used this website to get lat and long http://www.csgnetwork.com/llinfotable.html

class Map extends Component {

  render() {
    return (
      <div style={{ margin:"auto", width:"80%" }}>
        <div className="parent-box">
          <p>Critical</p><div class="box critical" />
          <p>Moderate</p><div class="box moderate"></div>
          <p>Low</p> <div class="box low"></div>
        </div>
        <div>
          <LeafletMap
            center={[40, 70]}
            zoom={3}
            maxZoom={10}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
          >
            <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
            {
              this.props.countries.map((country) => {
              
                return countriesJson.default[country['country']] !== undefined ?
                  (
                    <Marker position={[countriesJson.default[country['country']][0],countriesJson.default[country['country']][1]]} icon={getIcon(country['cases'])}>
                      <Popup>
                        <div>
                          <p>Country : {country["country"]} <br/>
                          Cases : {country["cases"]} <br/>
                          Today's Cases : {country["todayCases"]} <br/>
                          Total Deaths : {country["deaths"]} <br/>
                          Total Deaths : {country["deaths"]} <br/>
                          Today's Deaths : {country["todayDeaths"]} <br/>
                          Recovered : {country["recovered"]} <br/>
                          Critical : {country["critical"]}
                          </p>
                        </div>
                      </Popup>
                    </Marker>
                  )
                  : (null)
              })
            }
          </LeafletMap>
        </div>
      </div>
    );
  }
}

export default Map;

// place where i am retriving icon https://github.com/pointhi/leaflet-color-markers
function getIcon(cases) {
  let image = "";
  if(cases >= 5000)
    image = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png";
  else if(cases >1000 && cases < 5000)
    image = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png";
  else
    image = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png";
  return new L.Icon({
    iconUrl: image,
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
}