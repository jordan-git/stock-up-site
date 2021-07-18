import app from './app.js';

const port = Number(process.env.PORT) || 8080;

app.listen(port, () => console.log(`Listening on port ${port}`));