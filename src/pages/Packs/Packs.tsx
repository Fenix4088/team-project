import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getPacks } from "./packsReducer";
import { PacksTable } from "../../components/Main/PacksTable/PacksTable";
import { Select } from "../../components/common/Select/Select";
import styled from "styled-components/macro";
import { Loader } from "../../components/common/Loader/Loader";
import { Pagination } from "../../components/common/Pagination/Pagination";
import { InputText } from "../../components/common/InputText/InputText";

export type SelectValueT = 5 | 10 | 25 | 50 | 100;

export const Packs = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.packs.isLoading);
    const packsData = useAppSelector((state) => state.packs.packsTableData);

    const [option, setOption] = useState<SelectValueT>(5);



    useEffect(() => {
        dispatch(getPacks({ pageCount: option, page: packsData.page }));
    }, [dispatch, option]);

    const onChangeOption = (value: SelectValueT) => setOption(+value as SelectValueT);

    const changePageHandler = (pageNumber: number) => {
        dispatch(getPacks({ pageCount: option, page: pageNumber }));
    };

    const changePacksNameFilter = (nameFilter: string) => {
        dispatch(getPacks({ pageCount: option, packName: nameFilter }));
    };

    return (
        <>
            <FilterWrapper>
                <InputText placeholder={"Name"} onChangeText={changePacksNameFilter}/>
                <Select options={[5, 10, 25, 50, 100]}
                        value={option}
                        onChangeOption={onChangeOption} />
            </FilterWrapper>
            {isLoading ? <Loader /> : <PacksTable />}
            <Pagination totalItemsCount={packsData.cardPacksTotalCount}
                        currentPage={packsData.page}
                        portionSize={10}
                        pageSize={option}
                        changePage={changePageHandler} />
        </>
    );
};

const FilterWrapper = styled.div`
  margin-bottom: 50px;
`;
