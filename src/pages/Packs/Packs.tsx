import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getPacks } from "./packsReducer";
import { PacksTable } from "../../components/Main/PacksTable/PacksTable";
import { Select } from "../../components/common/Select/Select";
import styled from "styled-components/macro";
import { Loader } from "../../components/common/Loader/Loader";
import {packsAPI} from "../../API/packsAPI";
import {v1} from "uuid";
import {Redirect} from "react-router-dom";
import {routes} from "../../router/routes";

type SelectValueT = 5 | 10 | 25 | 50 | 100;

export const Packs = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.packs.isLoading);
    const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);


    const [option, setOption] = useState<SelectValueT>(5);

    useEffect(() => {
        dispatch(getPacks({ pageCount: option}));
    }, [dispatch, option]);

    const onChangeOption = (value: SelectValueT) => setOption(+value as SelectValueT);

    if (!isLoggedIn) {
        return <Redirect to={routes.login} />;
    }

    return (
        <>
            <FilterWrapper>
                {/*TODO: Paginator should be here*/}
                {/*TODO Filter(slider and search input) should be here (by Mark)*/}
                <Select options={[5, 10, 25, 50, 100]} value={option} onChangeOption={onChangeOption} />
                <button onClick={() => packsAPI.addPack(v1())}>+</button>
            </FilterWrapper>
            {isLoading ? <Loader /> : <PacksTable />}
            {/*TODO: Paginator should be here*/}
        </>
    );
};

const FilterWrapper = styled.div`
    margin-bottom: 50px;
`;
