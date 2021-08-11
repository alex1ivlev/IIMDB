import React, {useState} from "react";
import api from "../../api";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 800,
        }
    }
))

export default function UpdateMovie({movie, setMovie}){
    const [details, setDetails] = useState({title: movie.title, description: movie.description, rating: movie.rating, picture: movie.picture, releaseDate: movie.releaseDate });
    const [success, setSuccess] = useState(false);

    const submitHandler = e => {
            e.preventDefault();
            api.updateMovieById(movie.id, details).then(res => {
                   console.log(res.data);
                   setMovie(res.data);
                   setSuccess(true);
            })
        }
    const classes = useStyles();

    return (
        <div key={movie.id} className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={5}>
                    <Grid item>
        {success ? <div>
                    <p> SUCCESS!!!! Movie updated !!!! </p><br/>
                    </div> :
                    <form onSubmit={submitHandler}>
                                      <div>
                                        <label>Movie Title:</label>
                                        <input type="text" name="title"  textAlign="left"
                                        onChange={e => setDetails({...details, title: e.target.value})}
                                                                            value={details.title}/> <br/>

                                        <label>Description:</label>
                                        <input type="text" name="description"  textAlign="left"
                                        onChange={e => setDetails({...details, description: e.target.value})}
                                                                            value={details.description}/> <br/>

                                        <label>Movie Rating:</label>
                                        <input type="number" name="rating" required  textAlign="left"
                                        onChange={e => setDetails({...details, rating: parseInt( e.target.value)})}
                                                                            value={details.rating}/> <br/>

                                        <label>Movie Picture:</label>
                                        <input type="text" name="picture"  textAlign="left"
                                        onChange={e => setDetails({...details, picture: e.target.value})}
                                                                            value={details.picture}/> <br/>

                                        <label>Release Date:</label>
                                        <input type="text" name="releasedate"  textAlign="left"
                                        onChange={e => setDetails({...details, releaseDate: e.target.value})}
                                                                            value={details.releaseDate}/> <br/>
                                      </div>


                                      <button type="submit"  textAlign="center">Submit Changes</button>
                                    </form>
        }
                    </Grid>
                </Grid>
            </Paper>
        </div>

        )

}
