import mongoose from 'mongoose';

const { Schema } = mongoose

const LocationSchema = new Schema({
    address: String,
    source: String,
    dateAdded: Date
});

const Location = mongoose.model('location', LocationSchema);

export default Location;