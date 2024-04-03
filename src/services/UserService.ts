import http from '@/common';

class UserService {
    getAll(): Promise<any> {
        return http.get('users');
    }
    create(data: any): Promise<any> {
        return http.post('users', data)
    }
    update(id: any, data: any): Promise<any> {
        return http.put('users/' + id, data)
    }
    delete(id: any): Promise<any> {
        return http.delete('users/' + id)
    }
}

export default new UserService();