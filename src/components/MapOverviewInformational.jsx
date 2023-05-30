import React, { useState, useCallback, memo } from "react";
import ReactDOM from "react-dom/client";
import ReactDOMServer from "react-dom/server";
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
  StreetViewPanorama,
  Polyline,
  Marker,
} from "@react-google-maps/api";
import CommentSection from "./CommentSection";
import "./MapOverviewInformational.css";

const center = {
  lat: 37.42823,
  lng: -122.168861,
};

const markers = [
  {
    id: 1,
    name: "Stanford's Echo Circle / Whisper Garden",
    image: "/gems-issues/gem-stanford-whisper-garden.png",
    contexts: [
      {
        context: `Small garden surrounded by trees with a concrete circular area in the middle. Surrounding this circle are benches where people can sit. In the middle of the circle is the following quote forming a ring.`,
        createdAt: Date.now().toString(),
      },
      {
        context: `
      For the troubled, may you find peace.
      For the despairing, may you find hope.
      For the lonely, may you find love.
      For the skeptical, may you find faith.
      – Frances C. Arrillaga`,
        createdAt: Date.now().toString(),
      },
      {
        context: `If you were to stand in the middle and speak out loud, you can hear your voice speaking back to you. I was told about this place by a senior when I was still a frosh, and it acts as a secret that is passed on from old students to new students.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "hidden gem",
    position: { lat: 37.4270301, lng: -122.1705974 },
  },
  {
    id: 2,
    name: "Branner Earth Sciences Library ",
    image: "/gems-issues/gem-branner-earthsys-library.png",
    contexts: [
      { context: "Good study spot.", createdAt: Date.now().toString() },
    ],
    type: "hidden gem",
    position: { lat: 37.426378, lng: -122.172588 },
  },
  {
    id: 3,
    name: "EVGR Dining Upstairs",
    image: "/gems-issues/gem-evgr-dining.png",
    contexts: [{ context: "Spacious area.", createdAt: Date.now().toString() }],
    type: "hidden gem",
    position: { lat: 37.4266303, lng: -122.1575556 },
  },
  {
    id: 4,
    name: "Durand Building",
    image: "/gems-issues/concern-durand-building.png",
    contexts: [
      {
        context: "The Durand offices are unsettling.",
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 37.4268622, lng: -122.1729303 },
  },
  {
    id: 5,
    name: "Old Union",
    image: "",
    contexts: [
      { context: "Cozy area to hang out.", createdAt: Date.now().toString() },
    ],
    type: "hidden gem",
    position: { lat: 37.4250759, lng: -122.1699013 },
  },
  {
    id: 7,
    name: "The balcony of the English/creative writing building ",
    image: "",
    contexts: [
      { context: "Cool hidden spot!", createdAt: Date.now().toString() },
    ],
    type: "hidden gem",
    position: { lat: 37.42862, lng: -122.1704363 },
  },
  {
    id: 8,
    name: "The fourth floor of the math corner building",
    image: null,
    contexts: [
      { context: "Cozy area to hang out.", createdAt: Date.now().toString() },
    ],
    type: "hidden gem",
    position: { lat: 37.4289836, lng: -122.1715016 },
  },
  {
    id: 9,
    name: "Terrace of the A3C.",
    image: "/gems-issues/gem-a3c-clubhouse.png",
    contexts: [
      {
        context:
          "At the end of last year, we added tables, chairs, couches, and plants outside and made it cozier.",
        createdAt: Date.now().toString(),
      },
    ],
    type: "hidden gem",
    position: { lat: 37.4250361, lng: -122.1697083 },
  },
  {
    id: 10,
    name: "First floor of the Huang building",
    image: "/gems-issues/gem-huang-first-floor.png",
    contexts: [
      {
        context:
          "Open and quiet study area away from crowds of the Huang basement",
        createdAt: Date.now().toString(),
      },
    ],
    type: "hidden gem",
    position: { lat: 37.42835568591731, lng: -122.1741828 },
  },
  {
    id: 11,
    name: "Intersection on Jane Stanford Way & Lomita Mall",
    image: "/gems-issues/concern-jane-lomita-isect.png",
    contexts: [
      {
        context: "Lots of bike accidents here.",
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 37.4291732, lng: -122.1714532 },
  },
];

function updateMarkers(id, newContext) {
  markers.forEach((value) => {
    if (value.id === id) {
      value.contexts.push(newContext);
      console.log("Updated value");
    }
  });
}

function MapOverviewInformational() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA33ngdOfund3OFvbrbIuRcwBouzJiEabY",
  });
  const [map, setMap] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [commentActive, setCommentActive] = useState(false);
  const [showStreetView, setShowStreetView] = useState(false);
  const [contexts, setContexts] = useState([]);
  const [userId, setUserId] = useState(-1);
  const handleActiveMarker = (marker) => {
    setActiveMarker(marker);
  };
  const onLoad = useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      markers.forEach(({ position }) => bounds.extend(position));
      map.fitBounds(bounds);

      setMap(map);

      let panorama = map.getStreetView();

      function onCommentButtonClick(marker) {
        setUserId(marker.id);
        setContexts(marker.contexts);
        setCommentActive(!commentActive);
      }

      markers.forEach((marker) => {
        let position = marker.position;
        let mapInfowindow = new window.google.maps.InfoWindow({
          pixelOffset: new window.google.maps.Size(0, -48),
        });
        let streetViewInfowindow = new window.google.maps.InfoWindow({
          pixelOffset: new window.google.maps.Size(0, -48),
        });
        let mapMarker = new window.google.maps.Marker({
          position: position,
          map: map,
          icon:
            marker.type === "hidden gem"
              ? {
                  url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                  scaledSize: new window.google.maps.Size(55, 55), // in pixels
                }
              : {
                  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  scaledSize: new window.google.maps.Size(55, 55),
                },
        });
        mapMarker.addListener("click", function onMarkerClick() {
          mapInfowindow.setContent(
            `<div class="infoWindow">
            <h2>${marker.name}</h2>
            ${
              marker.image
                ? `<img class="imageWindow" src="${
                    process.env.PUBLIC_URL + marker.image
                  }" alt="${marker.name}"/>`
                : ""
            }
            <h3>Comment: ${marker.contexts[0].context}</h3>
          </div>`
          );

          mapInfowindow.setPosition(position);
          mapInfowindow.open(map);
          onCommentButtonClick(marker);

          streetViewInfowindow.setContent(
            `<div class="infoWindow">
          <h2>${marker.name}</h2>
          ${
            marker.image
              ? `<img class="imageWindow" src="${
                  process.env.PUBLIC_URL + marker.image
                }" alt="${marker.name}"/>`
              : ""
          }
          <h3>Comment: ${marker.contexts[0].context}</h3>
          

        </div>`
          );
          streetViewInfowindow.setPosition(position);
          streetViewInfowindow.open(panorama);
          onCommentButtonClick(marker);
        });
      });
    },
    [markers]
  );

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="container">
      <GoogleMap
        mapContainerClassName="mapContainer"
        center={center}
        zoom={16}
        onClick={() => setActiveMarker(null)}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >      <Polyline path={markers.map((marker) => marker.position)} options={{ strokeColor: "blue", strokeOpacity: 1.0, strokeWeight: 4 }} />
      </GoogleMap>
      {commentActive ? (
        <CommentSection
          contexts={contexts}
          setContexts={setContexts}
          updateMarkers={updateMarkers}
          userId={userId}
        />
      ) : null}
    </div>
  ) : (
    <div>Loading Map...</div>
  );
}
export default memo(MapOverviewInformational);
