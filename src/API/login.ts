import {instance} from "./commonAPIData";
import {LoginFormT} from "../pages/Login/Login";



export const loginApi = {
    async login(loginData: LoginFormT) {
        return await instance.post("auth/login", loginData);
    },
    async logout() {
        return await instance.delete("auth/me");
    }
};
