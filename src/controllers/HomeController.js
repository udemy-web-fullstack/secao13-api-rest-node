import Aluno from '../models/Aluno.js';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome:  'Neusa',
      sobrenome: 'Borges Gomes',
      email: 'neusaborges@gmail.com',
      idade: 37,
      peso: 60,
      altura: 1.53,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
