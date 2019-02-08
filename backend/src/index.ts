import express from 'express';
import path from 'path';
import routes from './routes';
const render = require('./render');

const app = express();

app.use('/api', routes);
app.get('/', render);
app.use(express.static(path.resolve('../frontend/build')));
app.use(render);

app.listen(4000, () => {
  console.log('app is listening on port 4000');
});
