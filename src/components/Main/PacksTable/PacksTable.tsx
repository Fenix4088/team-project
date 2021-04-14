import { v1 } from "uuid";
import { NavLink } from "react-router-dom";
import React from "react";
import styled from "styled-components/macro";
import { useAppSelector } from "../../../store/hooks";

export const PacksTable = () => {
    const packsData = useAppSelector((state) => state.packs.packsTableData);

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
                <TrHeader>
                    <th>Name</th>
                    <th>Cards count</th>
                    <th>Updated</th>
                    <th></th>
                </TrHeader>
            </thead>
            <tbody>
                {packsData.cardPacks.map((item) => {
                        return (
                            <PacksTr key={v1()}>
                                <Td content={"left"}>{item.name}</Td>
                                <Td content={"center"}>{item.cardsCount}</Td>
                                <Td content={"center"}>{formatDate(item.updated)}</Td>
                                <Td content={"center"}>
                                    <button>+</button>
                                    <button>del</button>
                                    <NavLink to={`/cards/${item._id}`}>cards</NavLink>
                                </Td>
                            </PacksTr>
                        );
                    }
                )}
            </tbody>
        </PacksTableWrap>
    );
};

const PacksTableWrap = styled.table`
    margin: 0 auto;
    border: 1px solid black;
    border-collapse: collapse;
    width: 100%;
`;

const PacksTr = styled.tr`
  transition: all .2s ease;

  td {
    padding: 10px 5px;
  }

  &:nth-child(odd) {
    background-color: ${({theme}) => theme.color.primary.main};
  }


  &:hover {
    background: #7e9ee5;
    cursor: pointer;
  }
`;

const TrHeader = styled.tr`
    th {
      padding: 10px 0;
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