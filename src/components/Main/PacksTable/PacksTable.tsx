import { v1 } from "uuid";
import { NavLink } from "react-router-dom";
import { routes } from "../../../router/routes";
import React from "react";
import styled from "styled-components/macro";
import {useAppSelector} from "../../../store/hooks";

export const PacksTable = () => {
    const packsData = useAppSelector((state) => state.packs.packsTableData);
    const isLoading = useAppSelector((state) => state.packs.isLoading);

    const formatDate = (date: string): string => {
        return new Date(date).toLocaleDateString("ru", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    };
    return (
        <PacksTableWrap>
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
                                <Td content={"left"}>{item.name}</Td>
                                <Td content={"center"}>{item.cardsCount}</Td>
                                <Td content={"center"}>{formatDate(item.updated)}</Td>
                                <Td content={"center"}>
                                    <button>+</button>
                                    <button>del</button>
                                    <NavLink to={`${routes.cards}${item._id}`}>cards</NavLink>
                                </Td>
                            </PacksTr>
                        );
                    })
                )}
            </tbody>
        </PacksTableWrap>
    );
};

const PacksTableWrap = styled.table`
    margin: 0 auto;
    border: 1px solid black;
    border-collapse: collapse;
    width: 80%;
`;

const PacksTr = styled.tr`
    td {
        padding: 10px 5px;
    }

    &:nth-child(odd) {
        background: ${({ theme }) => theme.color.primary.main};
        opacity: 0.5;
    }

    &:hover {
        background: aliceblue;
        cursor: pointer;
    }
`;

type TdT = {
    content: "left" | "center";
};

const Td = styled.td<TdT>`
    text-align: ${(props) => props.content};

    & > button, a {
        margin-right: 10px;

        &:last-child {
            margin-right: 0;
        }
    }
`;