import { instance } from "./commonAPIData";

const from = 'developer@gmail.com'
const message = `<div>password recover link: <a href='https://neko-back.herokuapp.com/2.0/set-new-password/$token$'>Link</a></div>`

export const passRecoverApi = {
    async recover(email: { email: string }) {
        return await instance.post('auth/forgot', {...email, from, message})
    }
};
