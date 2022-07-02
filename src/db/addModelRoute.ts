
import express from 'express';
import { Model } from 'mongoose';


export default function getModelRoute<T>(model: Model<T>) {
    const router = express.Router();
    router.get(`/api/${model.name}`)
}