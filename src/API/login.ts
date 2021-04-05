import {instance} from "./commonAPIData";
import {LoginFormT} from "../pages/Login/Login";



export const loginApi = {
    async login(loginData: LoginFormT): Promise<any> {
        return await instance.post("auth/login", loginData);
    }
};
