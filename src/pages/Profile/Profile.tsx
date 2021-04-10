import React from "react";
import { useAppSelector } from "../../store/hooks";
import { Redirect } from "react-router-dom";
import { routes } from "../../router/routes";
import defaultUser from "../../assets/svg/user-astronaut-solid.svg";
import styled, {StyledComponentProps} from "styled-components/macro";
import { SvgAvatar } from "./SvgAvatar";

export const Profile = () => {
    const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);
    const userData = useAppSelector((state) => state.profile.userData);

    if (!isLoggedIn) {
        return <Redirect to={routes.login} />;
    }
    return (
        <>
            {userData.avatar ? <img src={defaultUser} alt={"user avatar"}/> : <SvgDefaultAvatar/>}
            <div>{userData.name}</div>
            <div>{userData.publicCardPacksCount}</div>
        </>
    );
};

const SvgDefaultAvatar = styled(SvgAvatar)<StyledComponentProps<any, any, any, any>>`
    fill: ${(({theme}) => theme.color.primary.main)};
    width: 200px;
    cursor: pointer;
`;
