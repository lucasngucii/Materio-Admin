const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;
import {
   dataUser,
   dataProduct,
   dataProductStat,
   dataTransaction,
   dataOverallStat,
   dataAffiliateStat,
} from './data';
import { UserModel } from '../models/User';
import { ProductModel } from '../models/Product';
import { ProductStatModel } from '../models/ProductStat';
import { TransactionModel } from '../models/Transaction';
import { OverallStatModel } from '../models/OverallStat';
import { AffiliateStatModel } from '../models/AffiliateStat';

// fix strictQuery
mongoose.set('strictQuery', false);
// connect mongoose
mongoose
   .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName })
   .then(() => {
      console.log('Connected to Mongoose seccesfully ......');
       /* ONLY ADD DATA ONE TIME */
       /* Bug */    /* AffiliateStatModel.insertMany(dataAffiliateStat); */
       /* OverallStatModel.insertMany(dataOverallStat); */
       /* ProductModel.insertMany(dataProduct); */
       /* Bug */    /* ProductStatModel.insertMany(dataProductStat); */
       /* TransactionModel.insertMany(dataTransaction); */
       /* UserModel.insertMany(dataUser); */
   })
   .catch((err: any) => console.error(`Error: ${err}`));
module.exports = mongoose;
