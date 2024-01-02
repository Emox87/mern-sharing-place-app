import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://images.unsplash.com/photo-1528291151377-165f5107c82a?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9882393,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Statue of Liberty",
    description:
      "An iconic 1886 national monument with a museum and guided tours plus harbor and city views.",
    imageUrl:
      "https://images.unsplash.com/photo-1554334836-2547fa719431?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "New York, NY 10004",
    location: {
      lat: 40.6892494,
      lng: -74.0470753,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
