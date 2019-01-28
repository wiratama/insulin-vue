import mongoose from 'mongoose';

let RoleUserSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        user_id: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Users'
        },
        role_id: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Roles'
        }
    },
    {timestamps: true}
);

export default mongoose.model('RoleUser', RoleUserSchema);