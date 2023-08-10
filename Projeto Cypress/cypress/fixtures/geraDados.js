import { faker } from '@faker-js/faker';

class dadosUser {
    geraDadosUser() {

        const dados = {
            'empresa': '',
            'endereco': '',
            'numero': '123',
            'cidade': '',
            'estado': '',
            'cep': '',
            'telefone': '',
            'email': ''
        }
        return dados
    }
}

export default new dadosUser
