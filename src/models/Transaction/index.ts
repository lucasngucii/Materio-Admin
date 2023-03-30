import mongoose from 'mongoose';
import { Product } from '../Product';
export interface Transaction extends mongoose.Document {
    userId: string;
    cost: string;
    product: Product['id'];
}
export const TransactionSchema: mongoose.Schema<Transaction> = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        cost: { type: String, required: true },
        product: { type: mongoose.Schema.Types.ObjectId },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        collection: 'Transactions',
    }
);
export const TransactionModel: mongoose.Model<Transaction> = mongoose.model(
    'Transaction',
    TransactionSchema
);
