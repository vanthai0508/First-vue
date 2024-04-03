import http from '@/common';
import axios from 'axios';

class AuthService {
    register(data: any): Promise<any> {
        return axios.post('http://localhost:80/api/signup', data);
    }
    login(data: any): Promise<any> {
        return axios.post('http://localhost:80/api/login', data)
    }
    verify(userId: any, hash: any, expires: any, signature: any): Promise<any> {
        return http.get('/email/verify/' + userId + '/' + hash + '?expires=' + expires + '&signature=' + signature)
    }
}

export default new AuthService();