import http from '@/common';

class UserService {
    getAll(data: any): Promise<any> {
        if(!data) {
            return http.get('users');
        }
        else {
            return http.get('users?name='+data);
        }
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