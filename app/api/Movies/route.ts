import Movie from '../../../lib/index';
import { NextResponse } from 'next/server';

export async function POST(req: any){
    try {
        const movieData = await req.json() // Changed this line
        await Movie.create(movieData)

        return NextResponse.json({message: "Movie Data Created"}, {status:201})

    } catch (error) {
        return NextResponse.json({message: "Error", error}, {status:500})
    }

}