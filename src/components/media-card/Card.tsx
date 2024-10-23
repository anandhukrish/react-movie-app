import React from "react";

const Card: React.FC<{ image: string; title: string; date: string }> = ({
  image,
  title = "",
  date = "",
}) => {
  return (
    <div className="mr-5 inline-block w-[150px] min-w-[150px]">
      <img
        src={`http://image.tmdb.org/t/p/w342/${image}`}
        alt={title}
        className="h-[calc(150px_*_1.5) min-h-[calc(150px_*_1.5)] w-full rounded-[8px]"
      />
      <h1 className="mt-2 text-wrap text-[1rem] font-bold leading-[1.2]">
        {title}
      </h1>
      <p className="text-wrap text-[.8rem]">{date}</p>
    </div>
  );
};

export default Card;
