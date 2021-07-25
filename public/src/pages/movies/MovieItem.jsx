import React, {useState, useEffect} from "react";
import axios from "../../api";
import "../../styles/MovieItem.css"
import {MovieReview} from "./MovieReview";


export function MovieItem(props){
     const [movie, setMovie] = useState({});

    useEffect(() => {
        const id = props.match.params.id;

        async function fetchData() {
            const request = await axios.getMovieById(id);
            setMovie(request.data);
            return request;
        }

        fetchData();

    }, [props.match.params.id])


    return(
        <div>
            <h1> Chosen movie: </h1>
            <h2> {movie.title} </h2>
            <p id="info">
                About: {movie.description} <br/>
                Release date: {movie.releaseDate}<br/>
                Rating: {movie.rating}</p>
            <p> List of Actors: will load list of actors </p>

            <div>
                <MovieReview id={movie.id} />
            </div>
        </div>
    )
}
