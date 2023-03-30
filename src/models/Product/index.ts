import mongoose from 'mongoose';

export interface Product extends mongoose.Document {
    name: string;
    price: Number;
    description: string;
    category: string;
    rating: Number;
    supply: Number;
}

export const ProductSchema: mongoose.Schema<Product> = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String },
        category: { type: String, required: true },
        rating: { type: Number, required: true },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        collection: 'Products',
    }
);
export const ProductModel: mongoose.Model<Product> = mongoose.model('Product', ProductSchema);
