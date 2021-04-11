import React, { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { getPacks } from "./packsReducer";
import styled from "styled-components/macro";
import { PacksTable } from "./PacksTable";

export const Packs = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getPacks({ pageCount: 20, page: 2 }));
    }, [dispatch]);

    return (
        <>
            <PacksTable />
        </>
    );
};



