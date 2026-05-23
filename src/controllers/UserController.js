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

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll();
      console.log('====================================');
      console.log('🔥 USER ID DO MAGNO:', req.userId);
      console.log('🔥 USER EMAIL DO MAGNO:', req.userEmail);
      console.log('====================================');
      return res.json(users);
    } catch {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não encontrado.'],
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors
          ? e.errors.map((err) => err.message)
          : ['Erro interno no servidor'],
      });
    }
  }
  //Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não encontrado.'],
        });
      }

      await user.destroy();
      return res.json(user);
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
