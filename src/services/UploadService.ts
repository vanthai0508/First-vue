import http from '@/common';

class UploadService {
    uploadFile(data: any): Promise<any> {
        return http.post('files', data, {headers: {
            "Content-Type": "multipart/form-data"}
        });
    }
}

export default new UploadService();