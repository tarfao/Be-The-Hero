const request = require('supertest')
const app = require('../../src/app');
const connection = require('../../src/database/connection');

/**executada com o comando: npm test */
describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();/**um rollback nas migrations eh iniciada para nao enxer o banco */
        await connection.migrate.latest();/**executa todas as migrations */
    });

    /**por ainda continuar executando algo, e por conta disso gerar um erro,
     * destruimos a conexao
     */
    afterAll(async () => {
        await connection.destroy();
    })

    it('UMA NOVA ONG PODE SER CRIADA', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD2",
                email: "contato@apad.com",
                whatsapp: "4333422111",
                city: "Rio",
                uf: "SC"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})