import React, {useState, useEffect, useContext} from "react";
import api from "../../api/index";
import {Link} from "react-router-dom";
import "../../styles/ActorGallery.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 500,
    },
});

export default function ActorGallery() {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await api.getAllActors();
            setActors(res.data);
            return res;
        }

        fetchData();
    }, [])

    console.log(actors);
    const classes = useStyles();

    return (
        <div>
            <ul>
                {actors.map(({name, picture, bio, id}) => (
                    <Card className={classes.root} key={id}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={picture}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {bio}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" >
                                <Link to="#"> See More </Link>
                            </Button>
                        </CardActions>
                    </Card>

                ))}
            </ul>
        </div>
    );
}


