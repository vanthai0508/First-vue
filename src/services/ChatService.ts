import http from '@/common';

class ChatService {
    send(data: any): Promise<any> {
        return http.post('chat/messages', data);
    }
    getMessage(to: any): Promise<any> {
        return http.get('chat/messages?to=' + to);
    }
}

export default new ChatService();