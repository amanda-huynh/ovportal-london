import React, { useState, useCallback, memo }  from 'react'
import { GoogleMap, useJsApiLoader, InfoWindow, Marker } from '@react-google-maps/api';
import './MapOverview.css';

const center = {
  lat: 37.428230,
  lng: -122.168861
};

// const options = {
//   // mapId: "",
  // disableDefaultUI: true,
//   clickableIcons: false,
// };

const position = {
  lat: 37.428230,
  lng: -122.168861
}

const markers = [
  {
    id: 1,
    position: { lat: 37.4270301, lng: -122.1705974 },
  },
  {
    id: 2,
    position: { lat: 37.426378, lng: -122.172588 },
  },
  {
    id: 3,
    position: { lat: 37.4266303, lng: -122.1575556 },
  },
  {
    id: 4,
    position: { lat: 37.4268622, lng: -122.1729303 },
  },
  {
    id: 5,
    position: { lat: 37.4251583, lng: -122.1723736 },
  },
  {
    id: 6,
    position: { lat: 37.4251583, lng: -122.1723736 },
  },
  {
    id: 7,
    position: { lat: 37.42862, lng: -122.1704363 },
  },
  {
    id: 8,
    position: { lat: 37.4289836, lng: -122.1715016 },
  },
  {
    id: 9,
    position: { lat: 37.4250361, lng: -122.1697083 },
  },
  {
    id: 10,
    position: { lat: 37.42835568591731, lng: -122.1741828 },
  },
  {
    id: 11,
    position: { lat: 37.4291732, lng: -122.1714532 },
  }
];

function MapOverview() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA33ngdOfund3OFvbrbIuRcwBouzJiEabY",
  })
  
  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className="container">  
      {/* <h1> Map </h1> */}
      <GoogleMap
        mapContainerClassName="mapContainer"
        center={center}
        zoom={16}
        // options={options}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
        >
        </Marker>
      ))}
      </GoogleMap>
    </div>
  ) : <div>Loading Map...</div>
}

export default memo(MapOverview)
