import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {addNewPack, getPacks} from "./packsReducer";
import { PacksTable } from "../../components/Main/PacksTable/PacksTable";
import { Select } from "../../components/common/Select/Select";
import styled from "styled-components/macro";
import { Loader } from "../../components/common/Loader/Loader";
import { Redirect } from "react-router-dom";
import { routes } from "../../router/routes";
import { Button } from "../../components/common/Button/Button";

type SelectValueT = 5 | 10 | 25 | 50 | 100;

export const Packs = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.packs.isLoading);
    const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);

    const [option, setOption] = useState<SelectValueT>(5);

    useEffect(() => {
        dispatch(getPacks({ pageCount: option }));
    }, [dispatch, option]);

    const onChangeOption = (value: SelectValueT) => setOption(+value as SelectValueT);
    const addNewPackHandler = () => dispatch(addNewPack({name: "New pack, without modal window"}))

    if (!isLoggedIn) {
        return <Redirect to={routes.login} />;
    }

    return (
        <>
            <FilterWrapper>
                {/*TODO: Paginator should be here*/}
                {/*TODO Filter(slider and search input) should be here (by Mark)*/}
                <Select options={[5, 10, 25, 50, 100]} value={option} onChangeOption={onChangeOption} />
            </FilterWrapper>
            <Button onClick={addNewPackHandler} disabled={isLoading}>Add new pack +</Button>
            {isLoading ? <Loader /> : <PacksTable />}
            {/*TODO: Paginator should be here*/}
        </>
    );
};

const FilterWrapper = styled.div`
    margin-bottom: 50px;
`;
