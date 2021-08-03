import React, {useEffect, useState} from "react";
import axios, {isLoggedIn} from "../../api";
import {AddReview} from "./AddReview";
import {Grid, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

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

export function MovieReview(props) {

    const [show, setShow] = useState(false);
    const [reviews, setReviews] = useState([]);
    const onClick = () => setShow(!show);
    useEffect(() => {
        async function getReviews() {
            if (props.id !== undefined) {
                const request = await axios.getMovieReviews(props.id);
                setReviews(request.data);
            }
        }

        getReviews();
    }, [props.id]);

    const classes = useStyles();

    return (

        <div key={props.id}  className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Paper className={classes.paper}>
                            <button onClick={onClick}>Show Reviews</button>
                        </Paper>
            {show ? <div>
                <ul>
                    {reviews.map(({title, comment, rank, id}) => (
                        <li key={id}>
                            <Grid item>
                                <Grid item xs>
                                    Title: <h5> {title}</h5>
                                </Grid>
                                <Grid item xs>
                                Comment: <p>{comment}</p>
                                </Grid>
                            </Grid>
                        </li>
                    ))}
                </ul>

                    <Paper className={classes.paper}>
                    { isLoggedIn()? <AddReview id={props.id}/>:
                        <p> Please log in to leave a review </p>
                    }
                    </Paper>

            </div> : null}
                    </Grid>
                </Paper>
        </div>

    )
}

