import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "../../mapdatajson/countries.json";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";

//old react uses this.setState
//google the docs
//bestbet to convert to new React

//converted to new React


function MyMap() {

  //this colors can be depending on travel ban for each country
  let color = ['green', 'orange', 'red'];

  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    // console.log(mapData)
    //big object slowing down computer

  }, [])

  let countryStyle = {
    fillColor: "green",
    fillOpacity: 0.5, //between 0-1
    color: "black",
    weight: 1, // border
    // dashArray: 5,
  };

  const onCountryClick = (event) => {

    event.target.setStyle({
      color: "orange",
      fillColor: "yellow",
      fillOpacity: 0.5,
    });

    console.log("Doh");
    console.log(countryCode);
    //we might want to add a function tu display som data or to take us to the country stats :)
  };

  const onEachCountry = (country, layer) => {

    const countryISOCode = country.properties.ISO_A3;
    const countryName = country.properties.ADMIN;
    console.log(`${countryName},${countryISOCode}`);
    layer.bindPopup(countryName);


    const colorIndex = 1; //we need to create a function that depending on travel ban status, a different color will be selected  
    layer.options.fillColor = color[colorIndex];

    layer.on({
      click: onCountryClick,
    });

    return

  };



  return (
    <div className="box">
      <h1>Map</h1>
      <MapContainer
        style={{ height: "40vh", width: "80vw" }}
        zoom={1}
        center={[20, 10]}
      >
        <GeoJSON
          style={countryStyle}
          data={mapData.features}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
    </div>
  );

}

export default MyMap;