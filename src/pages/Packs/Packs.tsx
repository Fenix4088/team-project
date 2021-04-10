import React, { useEffect } from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import { getPacks } from "./packsReducer";

export const Packs = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getPacks());
    }, [dispatch]);

    const packsData = useAppSelector((state) => state.packs.packsTableData);

    return (
        <>
            <h1>Packs</h1>
        </>
    );
};