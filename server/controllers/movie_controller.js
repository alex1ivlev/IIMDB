import express from 'express'
import * as movieBL from './../models/movieBL.js'
import {authenticateMiddleware, isAdmin} from "./user_controller.js";

const router = express.Router();

//GET request to show all the movies
router.route('/').get(async function(req, res){
    return res.json(await movieBL.getAllMovies())
})

//GET request to show specific movie
router.route('/:id').get( async function (req, res){
    let id = req.params.id
    return res.json(await movieBL.getMovieById(id))
})

//POST request to add new movie
router.route('/').post(authenticateMiddleware, async function (req, res){
    let newMovie = req.body;
    newMovie.creatorId = req.user.user_id;
    return res.json(await movieBL.addNewMovie(newMovie));
})

//PUT request to update a movie
router.route('/:id').put(authenticateMiddleware, isAdmin, async function (req, res){
    let id = req.params.id;
    let data = req.body;
    return res.json(await movieBL.updateMovie(id, data));
})

//DELETE request to delete a movie
router.route('/:id').delete(authenticateMiddleware, isAdmin, async function (req, res){
    let id = req.params.id;
    return res.json(await movieBL.deleteMovie(id));
})

//POST request to post a new review in a movie
router.route('/:id/reviews/').post(authenticateMiddleware, async function (req, res){
    let review = req.body
    review.userId = req.user.user_id;
    review.movieId = parseInt(req.params.id);

    try {
        return res.json(await movieBL.addReview(review))
    } catch (e) {
        return res.status(500).json({ error: e.toString() });
    }
})
//GET request to show all reviews to a specific movie
router.route('/:id/reviews').get(async function (req, res) {
    let movie_id = req.params.id
    return res.json(await movieBL.getAllReviews(movie_id))
})

//POST request to add movie to user

router.route('/users/:id/movies').post(async function(req,res)
{
    let movie = req.body
    movie.movieId = req.params.id;
    movie.userId = req.user.user_id;
    try {
        return res.json(await movieBL.addMovieToUser(movie))
    } catch (e) {
        return res.status(500).json({ error: e.toString() });
    }
})

//POST request to add actor to movie

router.route('/movies/:id/actors/:id').post(async function(req,resp)
{
    let movieId = req.params.id;
    let actorId = req.actors.id;
    let result = await movieBL.addActorToMovie(movieId, actorId);
    return resp.json(result);
})

export default router;
