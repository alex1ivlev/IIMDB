import express from 'express'
import * as userBL from './../models/userBL.js'
import jwt from "jsonwebtoken";

const router = express.Router();


//POST request to add new user
router.route('/').post(async function (req, res) {
    let newUser = req.body;
    let user = await userBL.createNewUser(newUser);
    user.password = undefined;
    return res.json(user);
})

//POST request to login
router.route('/login').post(async function (req, resp) {
    let email = req.body.email
    let password = req.body.password
    try {
        let user = await userBL.login(email, password);
        let token = jwt.sign({
            user_id: user.id,
            email: user.email,
            admin: user.admin
        }, process.env.JWT_SECRET, {expiresIn: '1h'});

        return resp.json({token: token});
    } catch (e) {
        resp.status(401)
        return resp.json({errcode: 2, error: "email or password invalid"})
    }
})


// JWT secret is configurable via env var `JWT_SECRET`
export const authenticateMiddleware = (req, resp, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return resp.sendStatus(401)

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (!err) {
            req.user = payload
            next()
        } else {
            resp.status(403)
            console.log(err)
            return resp.json(err)
        }
    })
}

//Is ADMIN
export const isAdmin = (req, resp, next) => {
    if (!!req.user.admin) {
        next();
    } else {
        resp.status(401)
        return resp.json("not admin")
    }
}


export default router;
