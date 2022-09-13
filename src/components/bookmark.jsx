import React, { useState } from "react";

export default function Bookmark(props) {
  const [favourites, setfavourites] = useState(props.bookmark);
  const handleToggleBookMark = () => {
    setfavourites((prevState) => !prevState);
    return favourites;
  };

  return favourites ? (
    <div>
      <button onClick={handleToggleBookMark}>
        <i className="bi bi-suit-heart-fill"></i>
      </button>
    </div>
  ) : (
    <div>
      <button onClick={handleToggleBookMark}>
        <i className="bi bi-suit-heart"></i>
      </button>
    </div>
  );
}
