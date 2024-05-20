import  axios,  {AxiosInstance} from 'axios';
//import {getAuthorizationHeader} from '@/utils/auth';

export class AuthService {
    protected readonly axios: AxiosInstance;
    public constructor(url: string) {
        this.axios = axios.create({
            baseURL: url,
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 3000,
            timeoutErrorMessage: 'Request timed out'
        });
    }

    public async login(email: string, password: string): Promise<any> {
        /*const response = await this.axios.post('/login', {
            email,
            password
        });
        return response.data; */

        return  {
            username: email,
            id: '1234',
            accessToken: '1234567890',
            expiredAt: Date.now() + 3600
        }
    }

    getMe = (userId: string) => {
        /*
        return this.axios.get(`/users/${userId}`, {
            headers: getAuthorizationHeader()
        });
        */
        return {
            username: 'leonardo',
        }
    }
}