import { observable, action, runInAction } from "mobx";
import { history } from "../App";
import { api } from "../constants/api";
import { IAuthentication } from "../interfaces/IAuthenticationSchema";

let initialStateAuthentication: boolean = false;
let token = localStorage.getItem("token");

token
  ? (initialStateAuthentication = true)
  : (initialStateAuthentication = false);

export class Authentication implements IAuthentication {
  @observable isAuthenticated = initialStateAuthentication;

  @action.bound
  async logIn(data: string): Promise<void> {
    try {
      const { access_token } = await api.post("token", data);
      localStorage.setItem("token", access_token);
      localStorage.setItem("userData", data);

      runInAction(() => {
        this.isAuthenticated = true;
      });
    } catch (error) {
      runInAction(() => {
        this.logOut();
      });
    }
  }

  @action.bound
  logOut(): void {
    history.push("/");
    localStorage.clear();
    this.isAuthenticated = false;
  }
}
