import http from 'k6/http';
import { sleep } from 'k6';
import Cupons from '../request/cupons.request';

export default function () {

    let token = 'YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
    let cupons = new Cupons()

    group('List cupons', () => {
        cupons.list(token)
    })
}
