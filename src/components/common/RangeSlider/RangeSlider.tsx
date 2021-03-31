import React from "react";
import ReactSlider from "react-slider";
import styled from "styled-components/macro";

type SuperDoubleRangePropsType = {
    onChangeRange?: any
    values?: any
    // min, max, step, disable, ...
}

export const RangeSlider: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, values,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <StyledSlider
            defaultValue={values}
            onChange={onChangeRange}
            renderTrack={Track}
            renderThumb={Thumb}
        />
    );
}

const Track = (props: any, state: any) => <StyledTrack {...props} index={state.index}/>
const Thumb = (props: any, state: any) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;

// Styles

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 2px;
`

const StyledTrack = styled.div`
  border-radius: 2px;
  background: ${({theme}) => theme.color.primary.light};
  height: 2px;
`

const StyledThumb = styled.div`
  outline: none;
  height: 15px;
  width: 15px;
  background-color: ${({theme}) => theme.color.primary.main};
  margin-top: -6.5px;
  border-radius: 50%;
  cursor: grab;
  color: transparent;
`;

