import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import movie_controller from "./controllers/movie_controller.js";
import user_controller, {authenticateMiddleware} from "./controllers/user_controller.js";
import actor_controller from "./controllers/actor_controller ";

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({message: "Welcome to IMDB application"})
});

app.use('/api/movies', movie_controller);
app.use('/api/users', user_controller);
app.use('/api/actors', actor_controller);

app.listen(process.env.PORT, () => {
    console.log(`Serving on port ${process.env.PORT}`)
})
