import mongoose from 'mongoose';

export interface User extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    city: string;
    state: string;
    country: string;
    occupation: string;
    phoneNumber: string;
    transactions: string[];
    role: string;
}
export const UserSchema: mongoose.Schema<User> = new mongoose.Schema(
    {
        name: { type: String, required: true, min: 2, max: 100 },
        email: { type: String, required: true, max: 50, unique: true },
        password: { type: String, required: true, min: 5 },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        occupation: { type: String },
        phoneNumber: { type: String },
        transactions: [{ type: String }],
        role: { type: String, enum: ['user', 'admin', 'superadmin'], default: 'admin' },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        collection: 'Users',
    }
);
export const UserModel: mongoose.Model<User> = mongoose.model('User', UserSchema);
