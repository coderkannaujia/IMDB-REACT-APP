import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div className="poster p-4">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                <div className="posterImage relative h-[600px] md:h-[520px]">
                 <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay absolute -bottom-1 mb-20 md:mb-8  ">
                                    <div className="posterImage__title text-red-600 block text-center text-3xl  md:mr-[960px]  font-extrabold   md:text-5xl ">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime text-red-600 text-center font-bold text-2xl mt-4 md:mr-[700px]
                                  md:font-extrabold  md:text-3xl md:mt-6 md:flex md:justify-start md:gap-8 md:ml-14">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description text-sm mt-4 text-justify md:mt-6 md:w-1/2 md:ml-14 md:text-justify ">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
        </>
    )
}

export default Home