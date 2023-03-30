import mongoose from 'mongoose';

interface MonthlyData {
    month: string;
    totalSales: number;
    totalUnits: number;
}

interface DailyData {
    date: string;
    totalSales: number;
    totalUnits: number;
}

export interface OverallStat extends mongoose.Document {
    totalCustomers: Number;
    yearlySalesTotal: Number;
    yearlyTotalSoldUnits: Number;
    year: Number;
    monthlyData: MonthlyData[];
    dailyData: DailyData[];
    salesByCategory: Map<string, number>;
}
const OverallStatSchema: mongoose.Schema<OverallStat> = new mongoose.Schema(
    {
        totalCustomers: { type: Number },
        yearlySalesTotal: { type: Number },
        yearlyTotalSoldUnits: { type: Number },
        year: { type: Number },
        monthlyData: [
            {
                month: { type: String },
                totalSales: { type: Number },
                totalUnits: { type: Number },
            },
        ],
        dailyData: [
            {
                date: { type: String },
                totalSales: { type: Number },
                totalUnits: { type: Number },
            },
        ],
        salesByCategory: {
            type: Map,
            of: { type: Number },
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        collection: 'OverallStat',
    }
);
export const OverallStatModel: mongoose.Model<OverallStat> = mongoose.model(
    'OverallStat',
    OverallStatSchema
);
