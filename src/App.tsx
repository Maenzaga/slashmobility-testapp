import React, { useCallback, useEffect, useRef } from 'react';
import './App.sass';
import { useCurrentLocation } from './hooks/useCurrentLocation';
import { Loader } from '@googlemaps/js-api-loader';
import { APIK } from './constants';

function App() {
  const position = useCurrentLocation();
  const mapRef = useRef<google.maps.Map>()

  useEffect (() => {
    const loader = new Loader({
      apiKey: APIK
    });

    loader.load().then(() => {
      mapRef.current = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: {lat: 0, lng: 0},
          zoom: 2,
        }
      );
    });
  }, [position]);

  const showCurrentLocation = useCallback(() => {
    if (position && mapRef.current){
      mapRef.current.setCenter(position);
      mapRef.current.moveCamera({center: position, zoom: 4});
    
    new google.maps.Marker({
      position: position,
      map: mapRef.current,
      title: "Hello WOrld!",
    });
    }
  }, [position]);

  return (
    <>
    <header className="header-section">
      <div className="header-section_text">Slash My Profile</div>
    </header>
    <div className="card-container">
      <div className="user-card">Hey</div>
      <div className="location-card">Hey</div>
    </div>
    <div id="map" style={{width:window.innerWidth/2, height: 200, margin: 16}}></div>
    <button onClick={showCurrentLocation} style={{marginLeft:16}}>
      GET MY LOCATION
    </button>
    </>
  );
}

export default App;
