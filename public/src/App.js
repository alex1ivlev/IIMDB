import React from "react";
import {BrowserRouter as Router, Link, Redirect, Route, Switch, useHistory,} from 'react-router-dom'

import {MoviesGallery} from "./pages/movies/MoviesGallery"
import {MovieItem} from "./pages/movies/MovieItem";
import Register from "./pages/auth/Register"
import LoginForm from "./pages/auth/LoginForm";
import {Button} from "@material-ui/core";
import {Container} from "@material-ui/core";
import "./styles/App.css"

function App(){

    return(
    <Container maxWidth="sm">
        <Router>
            <Route path="/movies" exact component={MoviesGallery} />
            <Route path="/movies/:id" exact component={MovieItem} />
            <Route path="/login" exact component={LoginForm}/>
            <Route path="/register" exact component={Register}/>

        </Router>
    </Container>
    )
}

export default App;
