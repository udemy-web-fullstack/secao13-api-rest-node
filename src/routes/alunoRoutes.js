import { Router } from 'express';
import alunoController from '../controllers/AlunoController.js';

import loguinRequired from '../middlewares/loginRequired.js';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', loguinRequired, alunoController.store);
router.put('/:id', loguinRequired, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', loguinRequired, alunoController.delete);

export default router;
