
import express from 'express';
import { Model } from 'mongoose';


export default function getModelRoute<T>(model: Model<T>) {
    const router = express.Router();
    router.get(`/api/${model.name}s`, async (_req, res) => {
        res.send(await model.find());
    });
    router.get(`/api/${model.name}/:locId`, async (req, res) => {
        const id = req.params.locId;
        res.send(await model.find({ id }));
    });
    router.put(`/api/${model.name}`, async (req, res) => {
        await model.create(req.body);
        res.sendStatus(201);
    });
    return router;
}