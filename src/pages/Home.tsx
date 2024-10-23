import Header from "@/components/header/Header";
import RowItem from "@/components/media-card/RowItem";
import Search from "@/components/Search/Search";
import { Button } from "@/components/ui/button";
import {
  AllMovieTvUrls,
  popularMovieUrl,
  AllMovieTvDayOrWeekUrls,
} from "@/helpers/urls";
import React from "react";

// const movieTvAllDayOrWeekSelectValues = [
//   {
//     value: AllMovieTvDayOrWeekUrls.DAY,
//     displayValue: "Day",
//   },
//   {
//     value: AllMovieTvDayOrWeekUrls.WEEK,
//     displayValue: "Week",
//   },
// ];

// const movieTvAllSelectValues = [
//   {
//     value: AllMovieTvUrls.MOVIE,
//     displayValue: "movie",
//   },
//   {
//     value: AllMovieTvUrls.TV,
//     displayValue: "tv",
//   },
// ];

const Home = () => {
  return (
    <section id="Home" className="bg-slate-400 pb-[100px] pt-[30px]">
      <Header />
      <div className="container mx-auto">
        <div className="flex items-center justify-center pb-[50px]">
          <div className="banner relative mt-5 flex h-[300px] w-10/12 items-end justify-center rounded-[16px] border border-black p-5">
            <Search />
          </div>
        </div>
        <RowItem title="Trending" />
        <RowItem title="Free To Watch" />
        <RowItem title="Popular Movies" />
      </div>
    </section>
  );
};

export default Home;
