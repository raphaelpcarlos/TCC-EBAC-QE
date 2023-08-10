import http from 'k6/http';
import { check, sleep } from 'k6';
import Utils from '../utils/utils'

export default class Cupons {
    list(token) {
        let responde = http.get(`${Utils.getBaseUrl()}wp-json/wc/v3/coupons`, {
            headers: {
                Autorization: `Bearer ${token}`
            }
        })
        check(response, { 'Listagem deve retornar 200': r => r && r.status === 200 })
    }
} 