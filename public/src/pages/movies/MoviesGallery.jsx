import React, {useState, useEffect, useContext} from "react";
import api from "../../api/index";
import {MovieItem} from "./MovieItem";
import {Link} from "react-router-dom";
import "../../styles/MoviesGallery.css"
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 545,
    },
    media: {
        height: 500,
    },
});

export default function MoviesGallery() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await api.getAllMovies();
            setMovies(res.data);
            return res;
        }

        fetchData();
    }, [])

    console.log(movies);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                direction="row"
                justify-content="flex-start"
                alignItems="center">

                {movies.map(({title, picture, description, id}) => (
                    <Grid item lg={6} key={id}>
                        <Card>
                            <CardActionArea>
                                <Link to={`movies/${id}`}>
                                    <CardMedia
                                        className={classes.media}
                                        image={picture}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {description}
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </CardActionArea>
                        </Card>
                    </Grid>

                ))}

            </Grid>
        </div>
    );
}


/*<li key={id}>
                                    <div>
                                        <h2>
                                           <Link to={`movies/${id}`}> {title} </Link>
                                        </h2>
                                    </div>
                                    <img src={picture}/>
                                    {!description ? null : <p>{description}</p>}
                                </li> */
