import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import indexRouter from './routes/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

app.use('/', indexRouter);

export default app;