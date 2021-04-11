import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getPacks } from "./packsReducer";
import { v1 } from "uuid";
import styled from "styled-components/macro";
import {routes} from "../../router/routes";
import { NavLink } from "react-router-dom";

export const Packs = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getPacks({ pageCount: 20, page: 2 }));
    }, [dispatch]);

    const packsData = useAppSelector((state) => state.packs.packsTableData);
    const isLoading = useAppSelector((state) => state.packs.isLoading);

    const formatDate = (date: string):string => {
        return new Date(date).toLocaleDateString("ru", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        })
    }
    console.log(packsData);

    return (
        <>
            <PacksTable>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cards count</th>
                        <th>Updated</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr>
                            <td>"Loading"</td>
                        </tr>
                    ) : (
                        packsData.cardPacks.map((item) => {
                            return (
                                <PacksTr key={v1()}>
                                    <td>{item.name}</td>
                                    <td>{item.cardsCount}</td>
                                    <td>{formatDate(item.updated)}</td>
                                    <td>
                                        <button>+</button>
                                        <button>del</button>
                                        <NavLink to={`${routes.cards}${item._id}`}>cards</NavLink>
                                    </td>
                                </PacksTr>
                            );
                        })
                    )}
                </tbody>
            </PacksTable>
        </>
    );
};

const PacksTable = styled.table`
    border: 1px solid black;
    border-collapse: collapse;
    width: 100%;
`;

const PacksTr = styled.tr`
    td {
        padding: 10px 5px;
    }

    &:nth-child(odd) {
        background: ${({theme}) => theme.color.primary.main};
        opacity: .5;
    }
`;
