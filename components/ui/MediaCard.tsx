import React from 'react';
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
    <div className='card'>
        <div className='poster'>
            <img src={API_IMG+poster} />
        </div>
        <div className='info'>
            <p className='title'>{props.movie.title}</p>
            <p className='year'>{props.movie.year}</p>
        </div>
    </div>
  );
}
