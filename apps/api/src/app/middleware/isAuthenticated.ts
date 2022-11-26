import * as express from 'express';

const isAuthenticated = (req: express.Request, res: express.Response, next) => {
  return req.isAuthenticated()
    ? next()
    : res.status(401).json({ msg: 'unauthorized request' });
};

export default isAuthenticated;
