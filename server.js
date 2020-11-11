const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const app = require('./app');


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

const port = process.env.PORT || 8000;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('CONNECTED TO THE NATOURS DB');
    app.listen(port, () => {
      console.log('SERVER RUNNING');
    });
  });
