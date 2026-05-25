import bcryptjs from 'bcryptjs';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface) {
  await queryInterface.bulkInsert(
    'user',
    [
      {
        nome: 'Magno Teste 1',
        email: 'magnoteste1@gmail.com',
        password_hash: await bcryptjs.hash('magno1', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Magno Teste 2',
        email: 'magnoteste2@gmail.com',
        password_hash: await bcryptjs.hash('magno2', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Magno Teste 3',
        email: 'magnoteste3@gmail.com',
        password_hash: await bcryptjs.hash('magno3', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  );
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('user', null, {});
}
