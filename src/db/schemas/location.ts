import mongoose from 'mongoose';

const { Schema } = mongoose

const LocationSchema = new Schema({
    address: {
        type: String,
        required: true,
        unique: true
    },
    source: {
        type: String,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    openHouseStart: Date,
    openHouseEnd: Date,
    price: Number
});

LocationSchema.pre('save', function () {
    this.set({ updatedAt: new Date() });
});

const Location = mongoose.model('location', LocationSchema);

export default Location;