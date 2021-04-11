import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { getPacks } from "./packsReducer";
import { PacksTable } from "../../components/Main/PacksTable/PacksTable";
import { Select } from "../../components/common/Select/Select";

type SelectValueT = 5 | 10 | 25 | 50 | 100;

export const Packs = () => {
    const dispatch = useAppDispatch();
    const [option, setOption] = useState<SelectValueT>(5);

    useEffect(() => {
        dispatch(getPacks({ pageCount: option, page: 5 }));
    }, [dispatch, option]);

    const onChangeOption = (value: SelectValueT) => setOption(value);

    return (
        <>
            <Select options={[5, 10, 25, 50, 100]} value={option} onChangeOption={onChangeOption} />
            <PacksTable />
        </>
    );
};
