import React from "react";
import SearchStatus from "./searchStatus";
import User from "./user";
const Users = ({ users, ...rest }) => {
  return (
    <>
      <h2>
        <SearchStatus length={users.length}></SearchStatus>
      </h2>

      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <User users={users} onHandleDelete={rest.onHandleDelete}></User>
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
