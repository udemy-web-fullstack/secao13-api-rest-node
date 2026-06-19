import dotenv from 'dotenv';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

import './database/index.js';

import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import alunoRoutes from './routes/alunoRoutes.js';
import fotoRoutes from './routes/fotoRoutes.js';
import homeRoutes from './routes/homeRoutes.js';
import tokenRoutes from './routes/tokenRoutes.js';
import userRoutes from './routes/userRoutes.js';

const whiteList = [
  'http://api.magnovgomes.me',
  'http://localhost:3000',
  'http://localhost:5173',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Não permitido pelo CORS'));
    }
  },
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));

    this.app.use(
      helmet({
        crossOriginResourcePolicy: false,
      }),
    );

    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    this.app.use(
      '/images/',
      express.static(resolve(__dirname, '..', 'uploads', 'images')),
    );
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
