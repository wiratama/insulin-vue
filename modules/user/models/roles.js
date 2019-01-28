import mongoose from 'mongoose';

let RolesSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        name: {
            type: String,
        },
        permissions: {
            type: String,
        }
    },
    {timestamps: true}
);
export default mongoose.model('Roles', RolesSchema);