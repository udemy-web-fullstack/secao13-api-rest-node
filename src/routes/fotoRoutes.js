import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../config/multerConfig.js';
import fotoController from '../controllers/FotoController.js';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('foto'), fotoController.store);

export default router;
