import styled from "styled-components/macro";
import { useState } from "react";
import { InputText } from "../InputText/InputText";

export const FilterDemo = () => {

    const arrayToFilter = [
        {
            id: 1,
            name: "Maria"
        },
        {
            id: 2,
            name: "Marta"
        },
        {
            id: 3,
            name: "Margo"
        }
    ];

    const [filterValue, setFilterValue] = useState<string>("");

    const filterValueChangeHandler = (value: string) => {
        setFilterValue(value);
    };

    return (
        <>
            <InputText placeholder={"Name"} value={filterValue} onChangeText={filterValueChangeHandler} />

            <Wrapper >
                <div>filter value: {filterValue}</div>
                {arrayToFilter.map(item => (item.name.includes(filterValue) && <div key={item.id}>{item.name}</div>))}
            </Wrapper>
        </>
    );
};

// Styles

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
`;

