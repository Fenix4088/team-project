import React from "react";
import { useAppSelector } from "../../store/hooks";
import { Redirect } from "react-router-dom";
import { routes } from "../../router/routes";

export const Profile = () => {
    const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);
    const userData = useAppSelector((state) => state.profile.userData)

    if (!isLoggedIn) {
        return <Redirect to={routes.login} />;
    }
    return (
        <>
            <h1>Profile</h1>
            <div>{userData.toString()}</div>
        </>
    );
};
