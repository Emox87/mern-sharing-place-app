import React, { useRef, useEffect } from "react";

import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    // Refference to where the map will be rendered
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    // Render a marker on the map
    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div
      className={`map ${props.className}`}
      style={props.style}
      ref={mapRef}
    ></div>
  );
};

export default Map;
