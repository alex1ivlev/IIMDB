import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import movie_controller from "./controllers/movie_controller.js";
import user_controller, {authenticateMiddleware} from "./controllers/user_controller.js";

const app = express();

const corsOptions = {
    origin: "http://localhost:8000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({message: "Welcome to IMDB application"})
});

app.use('/api/movies', authenticateMiddleware, movie_controller);
app.use('/api/users', user_controller);

app.listen(8000, () => {
    console.log('Serving on port 8000')
})
