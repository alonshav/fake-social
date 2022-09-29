import * as express from 'express';
import * as cors from 'cors';
import postsRouter from "./routes/posts.router";

const app = express();
app.use(cors());

app.use('/api/posts', postsRouter);

const port = process.env.port || 3333;

const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
server.on('error', console.error);
