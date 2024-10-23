import React from "react";
import { Link } from "react-router-dom";

const PeopleProfile = ({ img, name, description, width }) => {
  const combineDescription = description.map((desc) => desc.title).join(",");
  return (
    <div className="mx-[10px] mb-[40px] w-[calc((100%_/_5)_-_20px)] rounded-[8px] shadow-lg">
      <div>
        <img
          src={`http://image.tmdb.org/t/p/w342/${img}`}
          alt={name}
          className="max-h[calc(150px_*_1.5)] h-[calc(250px_*_1.5)] w-full rounded-[8px] object-cover object-top"
        />
      </div>

      <div className="p-5 pt-3">
        <Link to="/">
          <h1 className="text-[1.1rem] font-bold">{name}</h1>
        </Link>
        <p className="text-sm">{combineDescription}</p>
      </div>
    </div>
  );
};

export default PeopleProfile;
