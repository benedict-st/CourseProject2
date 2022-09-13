import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

export default function User(props) {
  return (
    <>
      {props.users.map((user) => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{<Qualitie qualities={user.qualities} />}</td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate} /5</td>
          <td>{<BookMark bookmark={user.bookmark} />}</td>
          <td>
            <button
              onClick={() => props.onHandleDelete(user._id)}
              className="btn btn-danger"
            >
              delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}
