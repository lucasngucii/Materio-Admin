import { Document, Schema, Model, model } from 'mongoose';

interface IMonthlyData {
    month: string;
    totalSales: number;
    totalUnits: number;
}

interface IDailyData {
    date: string;
    totalSales: number;
    totalUnits: number;
}

export interface IProductStat extends Document {
    productId: string;
    yearlySalesTotal: number;
    yearlyTotalSoldUnits: number;
    year: number;
    monthlyData: IMonthlyData[];
    dailyData: IDailyData[];
    createdAt: Date;
    updatedAt: Date;
}

export const ProductStatSchema: Schema = new Schema(
    {
        productId: String,
        yearlySalesTotal: Number,
        yearlyTotalSoldUnits: Number,
        year: Number,
        monthlyData: [
            {
                month: String,
                totalSales: Number,
                totalUnits: Number,
            },
        ],
        dailyData: [
            {
                date: String,
                totalSales: Number,
                totalUnits: Number,
            },
        ],
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        collection: 'ProductStat',
    }
);

export const ProductStatModel: Model<IProductStat> = model<IProductStat>(
    'ProductStat',
    ProductStatSchema
);
