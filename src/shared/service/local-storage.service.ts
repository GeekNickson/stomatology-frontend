class LocalStorageService {

  public getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  public setToken(token: string): void {
    localStorage.setItem('jwt', token);
  }

  public removeToken(): void {
    localStorage.removeItem('jwt');
  }
}

export const localStorageService = new LocalStorageService();