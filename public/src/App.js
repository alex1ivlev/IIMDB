import React from "react";
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'

import MoviesGallery from "./pages/movies/MoviesGallery"
import MovieItem from "./pages/movies/MovieItem";
import ActorGallery from "./pages/actors/ActorGallery"
import Register from "./pages/auth/Register"
import LoginForm from "./pages/auth/LoginForm";
import UpdateMovie from "./pages/movies/UpdateMovie"
import DeleteMovie from "./pages/movies/DeleteMovie"
import {Container} from "@material-ui/core";
import "./styles/App.css"

function App() {

    return (

        <Router>
            <Container maxWidth="lg">
                <Route path="/movies" exact component={MoviesGallery}/>
                <Route path="/movies/:id" component={MovieItem}/>
                <Route path="/actors" component={ActorGallery}/>
                <Route path="/login" exact component={LoginForm}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/movies/:id/update" exact component={UpdateMovie}> </Route>
                <Route path="/movies/:id/delete" exact component={DeleteMovie}> </Route>

            </Container>

        </Router>

    )
}

export default App;
