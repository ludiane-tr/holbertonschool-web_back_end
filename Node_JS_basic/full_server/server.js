import express from 'express';
import routes from './routes/index';

const app = express();

app.use('/', routes);
app.listen(1245);

export default app;
