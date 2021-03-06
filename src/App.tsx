import React, { useCallback, useEffect, useRef } from 'react';
import './App.sass';
import { useCurrentLocation } from './hooks/useCurrentLocation';
import { Loader } from '@googlemaps/js-api-loader';
import { APIK } from './constants';
import { UserCard } from './components/UserCard/UserCard';
import { LocationCard } from './components/LocationCard/LocationCard';

function App() {
  const position = useCurrentLocation();
  const mapRef = useRef<google.maps.Map>()
  const bannerImageName = require('./assets/header-background-vector-small.jpg')
  const userImageName = require('./assets/persona.png')

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

    <body>
      <div className="cards-container">
      <UserCard bannerImg={bannerImageName} userImg={userImageName}/>
      <LocationCard locationClick={showCurrentLocation}/>
      </div>
    </body>
    </>
  );
}

export default App;
