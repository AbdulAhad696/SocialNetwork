import express from "express";
import bodyParser from "body-parser";
// const Image = require("../models/image");
import Users from "../models/user.js";

const usersRouter = express.Router();

usersRouter.use(bodyParser.json());

usersRouter
  .route("/:userId")
  .get((req, res, next) => {
    Users.findById(req.params.userId)
      .populate("profile_picture")
      .then((user) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(user);
      })
  }) 

export default usersRouter;