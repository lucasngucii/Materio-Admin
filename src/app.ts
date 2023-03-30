import helmet from 'helmet';
import { Request, Response, NextFunction } from 'express';
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');

app.connect(require("./database/connected"));
// use middleware
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// routers
/* app.use(require("./routes/index.router")); */

// Error Handling Middleware called
app.use((req: Request, res: Response, next: NextFunction) => {
   const error = new Error('Not found');
   next(error);
});
// error handler middleware
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
   res.status(error.status || 500).send({
      error: {
         status: error.status || 500,
         message: error.message || 'Internal Server Error',
      },
   });
});
module.exports = app;
