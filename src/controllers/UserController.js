import User from '../models/User.js';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);

      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors
          ? e.errors.map((err) => err.message)
          : ['Erro interno no servidor'],
      });
    }
  }
}

export default new UserController();
