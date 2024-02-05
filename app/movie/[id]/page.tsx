import { getMovie, getCredits, getSimilarMovies } from "@/lib/getMovies";
import { Movie, CastMember } from "@/typings";
import MoviesCarousel from "@/components/MoviesCarousel";
import { Button } from "@/components/ui/button";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

async function MoviePage({ params: { id } }: Props) {
  const movie: Movie = await getMovie(id);
  const credits = await getCredits(id);
  const castMembers: CastMember[] = credits.cast.slice(0, 5);
  let similarMovies = await getSimilarMovies(id);
  if (similarMovies.length === 0) {
    similarMovies = await getSimilarMovies("940551");
  }
  const voteAverage = movie.vote_average;
  const runtime = movie.runtime;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold">{movie.title}</h1>

        <div className="flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5">
          <div className="flex-shrink-0 relative cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/5 to-gray-300/55 dark:to-[#1A1C29]/80 z-10" />

            <p className="absolute z-20 bottom-5 left-5">{movie.title}</p>
            <img
              className="w-fit lg:min-w-[700px] h-[550px] object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
              src={`https://image.tmdb.org/t/p/original/${
                movie.backdrop_path || movie.poster_path
              }`}
              alt={movie.title}
              key={movie.id}
            />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold">
              {movie.title} ({movie.release_date?.split("-")[0]})
            </h2>
            <hr className="mb-3" />
            <p className="">{movie.overview}</p>

            <br></br>

            <div>
              <h2 className="text-2xl font-bold">Cast Members</h2>
              <ul>
                {castMembers.map((castMember) => (
                  <li key={castMember.id}>{castMember.name}</li>
                ))}
              </ul>
            </div>

            <br></br>

            <div>
              <h2 className="text-2xl font-bold">Details</h2>
              <ul>
                <li>Runtime: {runtime} minutes</li>
                <li>Rating: {voteAverage}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div style={{ marginLeft: "25vw" }}>
            <Button>Add to Watch List</Button>
          </div>
        </div>

        {similarMovies.length > 0 && (
          <MoviesCarousel movies={similarMovies} title="Recommended movies" />
        )}
      </div>
    </div>
  );
}

export default MoviePage;
