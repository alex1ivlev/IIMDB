import React, {useState, useEffect} from "react";
import axios from "../../api";
import "../../styles/MovieItem.css"
import {MovieReview} from "./MovieReview";
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 500,
        }
    }
))
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

    }, [props.match.params.id]);


        const classes = useStyles();

    return(
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <Typography gutterBottom variant="subtitle1">
                            <h1> Chosen movie: </h1>
                        </Typography>

                        <Typography variant="body2" gutterBottom>
                            <h2> {movie.title} </h2>
                        </Typography>
                                <Grid item xs>
                                <p id="info">
                                About: {movie.description} <br/>
                                Release date: {movie.releaseDate}<br/>
                                Rating: {movie.rating}</p>
                            <p> List of Actors: will load list of actors </p>
                                </Grid>

                    </Grid>
                </Grid>
            </Paper>

                <div>
                    <MovieReview id={movie.id} />
                </div>

        </div>
    )
}
