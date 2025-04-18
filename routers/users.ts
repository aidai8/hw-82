import express from "express";

const usersRouter = express.Router();

usersRouter.post('/', async (req, res, next) => {
    try {

    } catch (error) {

        next(error);
    }
});

export default usersRouter;