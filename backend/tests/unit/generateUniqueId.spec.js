const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Gerar um id unico', () => {
    it('Deve gerar um ID único', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);/**esperamos que o id gerado tenha 8 caracters, para executar
                                    o teste deve executar npm test */
    })
})