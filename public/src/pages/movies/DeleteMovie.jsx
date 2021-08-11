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

export default function DeleteMovie(props){
    const [movie, setMovie] = useState({});
    const delete = () =>
    useEffect(() => {

    }, []);

  const classes = useStyles();
return (

<div>

<h3> ARE YOU SURE YOU WANT TO DELETE THIS MOVIE ? </h3>

<button onClick={delete}> Delete </button>
</div>

)
}
