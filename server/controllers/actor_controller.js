import express from 'express'
import * as actorBL from './../models/actorBL.js'
import {authenticateMiddleware, isAdmin} from "./user_controller.js";

const router = express.Router();

//GET request to show all the actors
router.route('/').get(async function(req, res){
    return res.json(await actorBL.getAllActors())
})

//GET request to show actor
router.route('/:id').get( async function (req, res){
    let id = req.params.id
    return res.json(await actorBL.getActorById(id))
})

//POST request to add new actor
router.route('/').post(authenticateMiddleware, isAdmin, async function (req, res){
    let newActor = req.body;
    return res.json(await actorBL.createActor(newActor));
})

//PUT request to update an actor
router.route('/:id').put(authenticateMiddleware, isAdmin, async function (req, res){
    let id = req.params.id;
    let data = req.body;
    return res.json(await actorBL.updateActor(id, data));
})

//DELETE request to delete actor
router.route('/:id').delete(authenticateMiddleware, isAdmin, async function (req, res){
    let id = req.params.id;
    return res.json(await actorBL.deleteActor(id));
})

export default router;
