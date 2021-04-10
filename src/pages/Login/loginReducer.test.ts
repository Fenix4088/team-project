import {InitialStateT, login, loginReducer, UserDataT} from "./loginReducer";
import {LoginFormT} from "./Login";

let startState: InitialStateT;
let userData: UserDataT;
let formData: LoginFormT;

beforeEach(() => {
    startState = {
        isLoggedIn: false,
        isFormPending: false,
        loginError: ""
    };

    userData = {
        created: "",
        email: "test@test.test",
        isAdmin: false,
        name: "Joe",
        publicCardPacksCount: 12,
        rememberMe: false,
        token: "token",
        tokenDeathTime: 1223123213213213,
        updated: "",
        verified: false
    }

    formData = {
        email: "test@test.test",
        password: "123",
        rememberMe: false,
    }
});

test("should logged in, in case when thunk return fulfilled", () => {
    const action = login.fulfilled({userData}, "", formData);
    const endState = loginReducer(startState, action);

    expect(startState.isLoggedIn).toBeFalsy();
    expect(endState.isLoggedIn).toBeTruthy();
});


/*test("should show error, in case when thunk return rejected", () => {
    // {type: fetchUser.rejected}
    const action = login.rejected(new Error(), "2323", formData);
    console.log(action)
    // action.payload = {errorMessage: "Hello"}
    const endState = loginReducer(startState, action);

/!*    expect(startState.isLoggedIn).toBeFalsy();
    expect(endState.isLoggedIn).toBeFalsy();*!/
    expect(endState.loginError).toBe("test error");
});*/


