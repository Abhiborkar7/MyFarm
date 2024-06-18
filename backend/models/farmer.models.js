import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config({
    path: './.env'
})

const farmerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    profilePhoto: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmer'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmer'
    }],
    location: {
        type: String,
        required: true
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    saved: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }],
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CartItem'
    }]
});




const Farmer = mongoose.model('Farmer', farmerSchema);

export default Farmer;