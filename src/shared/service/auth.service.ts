import { AxiosPromise } from 'axios';
import { authHost, host } from '../../http/axios';
import { User } from '../model/user.model';

export interface Credentials {
  email: string;
  password: string;
}
export interface LoginResponse {
  user: User;
  jwt: string;
}

class AuthService {
  public register(data: FormData): AxiosPromise<LoginResponse> {
    return host.post<LoginResponse>('api/register', data);
  }

  public login(credentials: Credentials): AxiosPromise<LoginResponse> {
    return host.post<LoginResponse>('api/login', credentials);
  }

  public logout(): AxiosPromise<void> {
    return authHost.post('api/logout');
  }

  public refresh(): AxiosPromise<string> {
    return authHost.get('api/refresh');
  }

  public getAuth(): AxiosPromise<User> {
    return authHost.get('api/auth');
  }
}

export const authService = new AuthService();
