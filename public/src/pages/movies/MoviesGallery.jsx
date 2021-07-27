import React, {useState, useEffect, useContext} from "react";
import "../../styles/MoviesGallery.css"
import api from "../../api/index";
import {MovieItem} from "./MovieItem";
import {Link} from "react-router-dom";

export function MoviesGallery(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const res = await api.getAllMovies();
            setMovies(res.data);
            return res;
        }
        fetchData();
    }, [])

    console.log(movies);

        return(
                    <div>
                        <ul>
                            {movies.map(({ title, picture, description, id }) => (
                                <li key={id}>
                                    <div>
                                        <h2>
                                           <Link to={`movies/${id}`}> {title} </Link>
                                        </h2>
                                    </div>
                                    <img src={picture}/>
                                    {!description ? null : <p>{description}</p>}
                                </li>
                            ))}
                        </ul>
                    </div>
                )

}
