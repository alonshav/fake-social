import * as express from 'express';

const isAuthenticated = (req: express.Request, res: express.Response, next) => {
  console.log('checking isAuthenticated...')
  return req.isAuthenticated()
    ? next()
    : res.status(401).redirect('/login');
};

export default isAuthenticated;
