enum MovieUrls {
  POPULAR_MOVIES_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  TOP_RATED_MOVIES_URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  NOW_PLAYING_MOVIE_URL = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  UPCOMMING_MOVIE_URL = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
}

export enum TVUrls {
  AIRING_TODAY = "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
  POPULAR_TV = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
  TOP_RATED = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
}

export enum AllMovieTvDayOrWeekUrls {
  DAY = "trending/all/day?language=en-US",
  WEEK = "trending/all/week?language=en-US",
}

export enum AllMovieTvUrls {
  MOVIE = "trending/movie/day?language=en-US",
  TV = "trending/tv/day?language=en-US",
}

export const popularMovieUrl = "movie/popular?language=en-US&page=1";

export const popularPeopleUrl = "person/popular?language=en-US&page=1";

export const MovieCardData = [
  {
    title: "Upcoming Movies",
    url: MovieUrls.UPCOMMING_MOVIE_URL,
  },
  {
    title: "Now Playing Movies",
    url: MovieUrls.NOW_PLAYING_MOVIE_URL,
  },

  {
    title: "Top Rated Movies",
    url: MovieUrls.TOP_RATED_MOVIES_URL,
  },
  {
    title: "Popular Movies",
    url: MovieUrls.POPULAR_MOVIES_URL,
  },
];

export const TvCardData = [
  {
    title: "Airing Today",
    url: TVUrls.AIRING_TODAY,
  },
  {
    title: "Popular TV Shows",
    url: TVUrls.POPULAR_TV,
  },
  {
    title: "Top Rated TV Shows",
    url: TVUrls.TOP_RATED,
  },
];
