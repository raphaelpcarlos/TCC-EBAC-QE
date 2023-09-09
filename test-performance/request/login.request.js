import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 20, // Número de usuários virtuais
    duration: '120s', // Duração total do teste (2 minutos)
    stages: [
        { duration: '20s', target: 20 }, // Aumento gradual para 20 VUs em 20 segundos
    ],
};

export default class Login {
    acess(user, pass) {
        let response = http.post('http://lojaebac.ebaconline.art.br/minha-conta/', JSON.stringify({
            "username": user,
            "password": pass
        }))
        check(response, { 'Login deve retornar 200': r => r && r.status === 200 })
    }
} 