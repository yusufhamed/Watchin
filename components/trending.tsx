import "@/app/globals.css";
import { MediaCard } from './ui/MediaCard';
import { traktvMovies } from "@/typings";

export default async function Trending(){
    const url = "https://api.trakt.tv/movies/trending";

    const options: RequestInit={
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': '2',
            'trakt-api-key' : `${process.env.TRAKT_TV_API_KEY}`,
        },
    };

    const response = await fetch(url, options);
    const data = (await response.json()) as traktvMovies;

    console.log(data);

    return (
        <>
        <div className='movies'>
            {data.map((data: any) => (
                <MediaCard{...data} />
            ))}
        </div>
        </>
    );

}