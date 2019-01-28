import mongoose from 'mongoose';
import validator from 'validator';

let UsersSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            validate: (value) => {
                return validator.isEmail(value)
            }
        },
        password: {
            type: String,
            required: true
        },
        permissions: String,
        google_id: String,
        facebook_id: String,
        twitter_id: String,
        last_login: Date,
    },
    {timestamps: true}
);

export default mongoose.model('Users', UsersSchema);