import mongoose from 'mongoose';
import { User } from '../User';
import { Transaction } from '../Transaction';
export interface AffiliateStat extends mongoose.Document {
    userId: User['_id'];
    affiliateSales: Transaction['_id'][];
}
export const AffiliateStatSchema: mongoose.Schema<AffiliateStat> = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        affiliateSales: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        collection: 'AffiliateStat',
    }
);

export const AffiliateStatModel: mongoose.Model<AffiliateStat> = mongoose.model(
    'AffiliateStat',
    AffiliateStatSchema
);
