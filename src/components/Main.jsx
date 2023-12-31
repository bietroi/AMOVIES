import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'



const Main = () => {

    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]





    useEffect(() => {
        const Movielist = async () => {
            const request = await axios.get(requests.requestTrending);

            setMovies(request.data.results)

        }
        Movielist();
    }, [])
    // console.log(movie)
    const truncateString = (str, num) => {
        return (
            <>

                {
                    str?.length > num
                        ?
                        str.slice(0, num) + '...'
                        :
                        str
                }
            </>
        )
    };


    return (
        <div className="w-full h-[550px] text-white">
            <div className="w-full h-full">
                <div className="absolute w-full h-[550px] bg-gradient-to-r from-black "></div>
                <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie?.title} />
                <div className="absolute w-full top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>

                    <div className="my-4">
                        <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 cursor-pointer duration-500 hover:bg-black hover:text-white">Play</button>
                        <button className="border  text-white border-gray-300 py-2 px-5 ml-4 cursor-pointer duration-500 hover:bg-gray-300 hover:text-black">Watch Later</button>
                    </div>
                    <p className="text-gray-400 text-sm ">Released: {movie?.release_date}</p>
                    <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncateString(movie?.overview, 150)}</p>
                </div>

            </div>
        </div>
    )
}

export default Main;