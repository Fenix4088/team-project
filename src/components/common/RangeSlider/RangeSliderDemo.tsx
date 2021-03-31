import {RangeSlider} from "./RangeSlider";
import React, {useState} from "react";
import styled from "styled-components/macro";

export const RangeSliderDemo = () => {
    const [values, setValues] = useState([0, 100]);
    const changeRangeInputValues = (values: Array<number>) => {
        setValues(values)
    }

    return (
        <>
            <StyledDiv1>Value: {values[0]}</StyledDiv1>
            <StyledDiv2>Value: {values[1]}</StyledDiv2>

                <RangeSlider values={values} onChangeRange={changeRangeInputValues}/>

        </>
    )
}

// Styles

const StyledDiv1 = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
`

const StyledDiv2 = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`