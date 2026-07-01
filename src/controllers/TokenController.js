import jwt from 'jsonwebtoken';
import User from '../models/User.js';

class TokenController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        return res.status(401).json({
          errors: ['Credenciais inválidas'],
        });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({
          errors: ['Usuário não existe'],
        });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({
          errors: ['Senha inválida.'],
        });
      }

      const { id } = user;
      const token = jwt.sign(
        { id, email },
        process.env.TOKEN_SECURITY || 'SECRET_RESERVA',
        {
          expiresIn: process.env.TOKEN_VALIDAD || '7d',
        },
      );

      return res.json({
        token,
        user: {
          id: user.id,
          nome: user.nome,
          email: user.email,
        },
      });
    } catch (e) {
      console.log('Erro interno no TokenController:', e.message);
      return res.status(400).json({
        errors: ['Erro interno no servidor ao gerar o token.'],
      });
    }
  }
}
export default new TokenController();
