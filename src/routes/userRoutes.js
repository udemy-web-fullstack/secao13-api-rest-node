import { Router } from 'express';
import UserController from '../controllers/UserController.js';

import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

// Não deveria existir
// router.get('/', UserController.index); Lista de usuários
// router.get('/:id', UserController.show); Lista de usuários

router.post('/', loginRequired, UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
