import React, {useState} from "react";
import api from "../../api";
import LoginForm from "../auth/LoginForm";
import {Link} from "react-router-dom";
import { Container, CssBaseline, Grid, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import "../../styles/Register.css"

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


export default function Register() {
    const [details, setDetails] = useState({name: "", email: "", password: ""})
    const [success, setSuccess] = useState(false);
    const submitHandler = e => {
        e.preventDefault();
        api.register(details).then(res => {
            setSuccess(true);
        })
    }

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" id="formBody">
            <CssBaseline/>
            <div className={classes.paper}>

                {success ? <div>
                        <Typography component="h1" variant="h5">
                            SUCCESS!!!! USER REGISTERED SUCCESSFULLY !!!! <br/>
                        </Typography>

                        <div> Go to: <Link to={`/login`}>Login</Link></div>
                    </div> :
                    <form className={classes.form} onSubmit={submitHandler}>
                        <Grid container spacing={2}>
                            <Typography component="h2" variant="h5">
                                Sign up by filling the info below:
                            </Typography>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    placeholder="Enter your name"
                                    onChange={e => setDetails({...details, name: e.target.value})}
                                    value={details.name}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    placeholder="Enter your email"
                                    pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
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
                                Sign Up
                            </Button>
                        </Grid>
                    </form>
                }

            </div>
        </Container>
    )
}
