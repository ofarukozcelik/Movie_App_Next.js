import Image from 'next/image'
import React from 'react'
import 'dotenv/config'

const getMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.api_key}`)
    if (!res.ok) {
        throw new Error('Failed to fetch movie details')
    }
    return await res.json()
}

const page = async ({ params }) => {
    const id = params.id
    let movieDetail

    try {
        movieDetail = await getMovie(id)
    } catch (error) {
        console.error(error)
        return <div>Error fetching movie details</div>
    }

    return (
        <div className='relative p-7 min-h-screen'>
            <Image
                style={{ objectFit: 'cover' }}
                fill src={`https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path || movieDetail?.poster_path}`}
                alt={movieDetail?.title || 'Movie Poster'}
            />
            <div className='absolute'>
                <div className='text-4xl font-bold my-3'>{movieDetail?.title}</div>
                <div className='w-1/2'>{movieDetail?.overview}</div>
                <div className='my-3'>{movieDetail?.release_date} - {movieDetail?.vote_average}</div>
                <div className='my-2 border w-32 hover:bg-white hover:text-black p-2 text-center text-lg cursor-pointer'>Trail</div>
            </div>
        </div>
    )
}

export default page
