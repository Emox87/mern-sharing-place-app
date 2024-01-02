import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Emil Tsvetanov",
      image:
        "https://images.pexels.com/photos/914929/pexels-photo-914929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      places: 1,
    },
    {
      id: "u2",
      name: "Ivan Ivanov",
      image:
        "https://images.pexels.com/photos/258330/pexels-photo-258330.jpeg?auto=compress&cs=tinysrgb&w=600",
      places: 1,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
