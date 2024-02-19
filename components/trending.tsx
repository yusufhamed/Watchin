import "@/app/globals.css";
import { MediaCard } from './ui/MediaCard';
import { traktvMovies } from "@/typings";

export default async function Trending(props: any){
    let page: string
    if (!props.page){
         page = '0';
    }else{
         page = props.page;
    }

    const url = `https://api.trakt.tv/movies/trending?page=${page}&limit=20`;

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

    

    return (
        <>
        <div className='container-movies'>
            <div className='center'>
                <div className='movies'>
                    {data.map((data: any) => (
                        <MediaCard{...data} />
                    ))}
                </div>
            </div>
        </div>
        </>
    );

}