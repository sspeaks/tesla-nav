
import express from 'express';
import { Model } from 'mongoose';


export default function getModelRoute<T>(model: Model<T>) {
    const router = express.Router();
    router.get(`/api/${model.modelName}s`, async (_req, res) => {
        res.send(await model.find());
    });
    router.get(`/api/${model.modelName}/:locId`, async (req, res) => {
        const _id = req.params.locId;
        res.send(await model.findOne({ _id }));
    });
    router.put(`/api/${model.modelName}`, async (req, res, next) => {
        try {
            await model.create(req.body);
            res.sendStatus(201);
        } catch (err) {
            next(err);
        }
    });
    return router;
}