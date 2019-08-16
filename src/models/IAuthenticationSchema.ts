export interface IAuthentication {
    isAuthenticated: boolean;
    logIn(data: string): Promise<void>
    logOut(): void
  }