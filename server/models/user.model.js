import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        name: {typeof: 'string', required: true, unique: true},
        email: {typeof: 'string', required: true, unique: true},
        password: {typeof: 'string', required: true},
        img: {typeof: 'string'},
    },
    {
        timestamps: true,
        versionKey: false
    }
)

