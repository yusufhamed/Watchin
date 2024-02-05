export type Movie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    runtime?: number;
};

export type SearchResults = {
    cast: any;
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};

export type Genre = {
    id: string;
    name: string;
};

export type Genres = {
    genres: Genre[];
};

export type traktvMovie ={
  watchers: number;
  movie: {
    title: string;
    year: number;
    ids: {
      trakt: number;
      slug: string;
      imdb: string;
      tmdb: number;
    };
  };
};

export type traktvMovies= traktvMovie[];

export type CastMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type Credits = {
  id: number;
  cast: CastMember[];
};
