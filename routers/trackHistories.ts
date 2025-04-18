import express from "express";

const trackHistoryRouter = express.Router();

trackHistoryRouter.post('/', async (req, res, next) => {
    try {

    } catch (error) {

        next(error);
    }
});

export default trackHistoryRouter;