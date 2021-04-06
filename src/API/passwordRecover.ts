import { instance } from "./commonAPIData";

const from = 'developer@gmail.com'
const message = `<div>password recover link: <a href='http://localhost:3000/#/set-new-password/$token$'></a></div>`

export const passRecoverApi = {
    async recover(email: { email: string }) {
        return await instance.post('auth/forgot', {...email, from, message})
    }
};
