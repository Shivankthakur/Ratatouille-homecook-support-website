const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        name: {
            type: String,
            trim: true
        },
        status: {
            type: String
        },
        username: {
            type: String,
            trim: true,
            required: true
        },
        location: {
            type: String,
            trim: true
        },
        bio: {
            type: String,
            trim: true
        },
        cuisines: {
            type: [String]
        },
        specialities: {
            type: [String]
        },
        social: {
            youtube: {
                type: String,
                trim: true
            },
            twitter: {
                type: String,
                trim: true
            },
            facebook: {
                type: String,
                trim: true
            },
            instagram: {
                type: String,
                trim: true
            }
        },
        dishes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'dish'
            }
        ]
    },
    { timestamps: true }
);

module.exports = Profile = mongoose.model('profile', ProfileSchema);
