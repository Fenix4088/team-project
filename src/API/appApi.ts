import { instance } from "./commonAPIData";

export const appAPI = {
    async me() {
        return await instance.post("auth/me");
    }
};