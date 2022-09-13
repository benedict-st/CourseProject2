import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";

export default function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userID) => {
    setUsers(users.filter((user) => user._id !== userID));
  };

  return (
    <div>
      <Users users={users} onHandleDelete={handleDelete} />
    </div>
  );
}
