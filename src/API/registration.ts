import { RegistrationFormT } from './../pages/Registration/Registration';
import { instance } from './commonAPIData';


export const regestrationApi = {
    async register(registrationData:RegistrationFormT){
        return await instance.post("auth/register", {email: registrationData.email, password:registrationData.password})
    }
};

