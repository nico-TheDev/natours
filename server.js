const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

console.log(process.env.NODE_ENV);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('SERVER RUNNING');
});
