import { http } from '@/plugins/axios'

export default {
    async getHealthcheck() {
        return http.get('/api/v1/healthcheck')
    },
    async postLogin() {
        return http.post('/api/v1/login',{

        })
    },
    async postTestToken() {
        return http.post('/api/v1/testToken',{

        })
    },
    async postTestTokenExpired() {
        return http.post('/api/v1/testTokenExpired',{

        })
    },
    async postRefreshToken(params: object) {
        interface form {
            refreshToken: string
        }
        return http.post('/api/v1/refreshToken',{
            'refreshToken': (params as form).refreshToken
        })
    }
}