import React, {useEffect, useState} from "react";
import axios, {isLoggedIn} from "../../api";
import {AddReview} from "./AddReview";
import {Box, Card, Grid, Link, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Rating} from "@material-ui/lab";
import CardContent from "@material-ui/core/CardContent";
import {Redirect, useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            minWidth: 275
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 800,
        },
        title: {
            fontSize: 14,
        }
    }
))

export function MovieReview(props) {

    const [show, setShow] = useState(false);
    const [reviews, setReviews] = useState([]);
    const onClick = () => setShow(!show);
    let history = useHistory();

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

        <div key={props.id} className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <div>
                        Reviews: <ul>
                        {reviews.map(({title, comment, rank, id}) => (
                            <li key={id}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography variant="h7" component="h3">
                                            {title}
                                        </Typography>

                                        <Typography variant="body2" component="p">
                                            {comment}
                                        </Typography>

                                        <Box component="fieldset" mb={3} borderColor="transparent">
                                            <Rating name="read-only" value={rank} readOnly/>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </li>
                        ))}
                    </ul>

                        <Paper className={classes.paper}>
                            {isLoggedIn() ? <AddReview id={props.id}/> :
                                <p> Please <Link onClick={() => {
                                    history.push('/login')
                                }}> Login </Link> to leave a review </p>
                            }
                        </Paper>

                    </div>
                </Grid>
            </Paper>
        </div>

    )
}


