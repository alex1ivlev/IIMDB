import React from "react";
import {BrowserRouter as Router, Link, Redirect, Route, Switch,} from 'react-router-dom'

import {MoviesGallery} from "./pages/movies/MoviesGallery"
import {MovieItem} from "./pages/movies/MovieItem";

function App(){

    return(

        <Router>
            <Route path="/movies" exact component={MoviesGallery} />
            <Route path="/movies/:id" exact component={MovieItem} />
        </Router>
    )
}

export default App;
