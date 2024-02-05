import React from 'react';
import Image from "next/image";
import './MediaCard.css';
import { Movie } from '@/typings';


export const MediaCard = async (props: any) => {
  const url = `https://api.themoviedb.org/3/movie/${props.movie.ids.tmdb}?api_key=${process.env.TMDB_API_KEY_1}`;
  const API_IMG = 'https://image.tmdb.org/t/p/w500/';
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  };
  const response = await fetch(url, options);
  const data = (await response.json()) as Movie;
  const poster = data.poster_path;
  return (
    <div className='card cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg'>
        <div className='poster'>
            <Image 
            className="shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
            src={API_IMG+poster}
            alt={props.movie.title}
            width={500}
            height={1080} />
        </div>
        <div className='info'>
            <p className='title font-semibold'>{props.movie.title}</p>
            <p className='year font-semibold'>{props.movie.year}</p>
        </div>
    </div>
  );
}
