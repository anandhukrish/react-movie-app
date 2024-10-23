import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Info, Play } from "lucide-react";
import https from "@/https/https";

interface BannerData {
  backdrop_path: string;
}

type BannerType = "movie" | "tv";

type BannerProps = {
  type: BannerType;
};

const Banner: React.FC<BannerProps> = ({ type }) => {
  const [banner, setBanner] = useState<BannerData | null>(null);
  // useEffect(() => {
  //   async function getBannerData() {
  //     const response = await https.get(`trending/${type}/day?language=en-US`);
  //     setBanner(response.data.results[0] as BannerData);
  //   }
  //   getBannerData();
  // }, []);

  return (
    <div
      className="h-screen bg-gradient-to-t from-slate-800 to-slate-400 bg-cover bg-center bg-no-repeat"
      // style={{
      //   backgroundImage: banner?.backdrop_path
      //     ? `linear-gradient(to top, rgba(30, 41, 59) , rgba(30, 41, 59,.6) ,rgb(30 41 59 / 0.3)) , url('https://image.tmdb.org/t/p/original${banner.backdrop_path}')`
      //     : "no-image",
      // }}
    >
      <div className="flex h-full items-center p-[0px_60px]">
        <div className="w-1/2 pt-40">
          <h1 className="text-[3vw] font-extrabold text-white">Stream Video</h1>
          <p className="mb-5 text-[1.2vw] text-white">
            Stream your videos to millions of users across the globe.
          </p>
          <div className="inline-flex items-center justify-center">
            <Button className="flex items-center justify-center bg-white px-6 text-black hover:bg-white/80">
              <Play className="mr-1" size={24} /> Play
            </Button>
            <Button className="ml-3 flex items-center justify-center bg-[rgba(109,109,110,0.7)] text-white hover:bg-[rgba(109,109,110,0.4)]">
              <Info className="mr-3" size={24} /> More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
