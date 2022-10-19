import * as express from 'express';
import * as cors from 'cors';
import * as session from 'express-session';
import * as passport from 'passport';
import * as morgan from 'morgan';

import { initializePassport } from './passport-config';
import flash = require('express-flash');

import postsRouter from './app/routes/posts.router';
import authRouter from './app/routes/auth.router';


const app = express();
const port = process.env.port || 3333;
const store = new session.MemoryStore(); // Session Store


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(flash());

//Cors
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true
}));


initializePassport(passport);

//Session
app.use(session({
  secret: 'SECRET_SESS', //Todo: save in .env
  store: store,
  saveUninitialized: false,
  resave: false,
  cookie: {
    sameSite: false,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60000,
    httpOnly: true
  }
}));

//Passport
app.use(passport.session());
app.use(passport.initialize());


//Routes
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);


const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});

server.on('error', console.error);
