import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import api from "../../api";
import {makeStyles} from "@material-ui/core/styles";
import {Container, CssBaseline, Grid, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function LoginForm(props) {
    const [error, setError] = useState("");
    const [details, setDetails] = useState({email: "", password: ""})
    let history = useHistory();

    const submitHandler = e => {
        e.preventDefault();
        api.login(details).then(res => {
            setError("");
            localStorage.setItem('token', res.data.token);
            history.push("/movies");
        }).catch(err => {
            console.log("??")
            setError(err.response.data.error);
        })
    }
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" id="formBody">
            <CssBaseline/>
            <div className={classes.paper}>
                <form className={classes.form} onSubmit={submitHandler}>
                    <Grid container spacing={2}>
                    <Typography component="h2" variant="h5">
                        Login:
                    </Typography>
                    {(error !== "") ? (<div>{error} </div>) : ""}

                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                            placeholder="Enter your email"
                            onChange={e => setDetails({...details, email: e.target.value})}
                            value={details.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            onChange={e => setDetails({...details, password: e.target.value})}
                            value={details.password}
                        />
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Log In
                    </Button>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}
