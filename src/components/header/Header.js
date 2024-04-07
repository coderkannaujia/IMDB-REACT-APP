import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft flex justify-center gap-4 p-6 ">
                <Link to="/" ><img className="header__icon h-6 w-14 md:h-8 md:w-16 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span className="md:text-xl">Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span className="md:text-xl">Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span className="md:text-xl">Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header