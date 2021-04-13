import React, { useState } from "react";
import { Pagination } from "./Pagination";
import styled from "styled-components/macro";

export const PaginationDemo = () => {

    const [page, setPage] = useState<number>(1)

    const changePage = (pageNumber: number) => {
        setPage(pageNumber)
    }

    return (
        <>
            <PageDisplay>Current page: {page}</PageDisplay>
            <Pagination pageSize={4} portionSize={10} currentPage={page} changePage={changePage} totalItemsCount={500}/>
        </>
    )
}

const PageDisplay = styled.div`
  position: absolute;
  top: 60px;
`