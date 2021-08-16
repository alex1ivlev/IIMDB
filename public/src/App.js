import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch,} from 'react-router-dom'

import MoviesGallery from "./pages/movies/MoviesGallery"
import MovieItem from "./pages/movies/MovieItem";
import ActorGallery from "./pages/actors/ActorGallery"
import Register from "./pages/auth/Register"
import LoginForm from "./pages/auth/LoginForm";
import UpdateMovie from "./pages/movies/UpdateMovie"
import DeleteMovie from "./pages/movies/DeleteMovie"
import {Container, Link} from "@material-ui/core";
import "./styles/App.css"
import Navbar from "./components/Navbar";

function App() {

    return (
        <>
            <Router>
            <Navbar>
            </Navbar>

                <Container maxWidth="lg">
                    <Route path="/" exact component={MoviesGallery}/>

                    <Route path="/movies/:id" component={MovieItem}/>
                    <Route path="/actors" component={ActorGallery}/>
                    <Route path="/movies/:id/update" exact component={UpdateMovie}/>
                    <Route path="/movies/:id/delete" exact component={DeleteMovie}/>
                    <Route path="/login" exact component={LoginForm}/>
                    <Route path="/register" exact component={Register}/>
                </Container>

            </Router>
        </>

    )
}

export default App;
