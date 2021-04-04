import React from "react";
import { Button } from "../../components/common/Button/Button";
import { CheckboxDemo } from "../../components/common/Checkbox/checkboxDemo";
import { EditableSpanDemo } from "../../components/common/EditableSpan/EditableSpanDemo";
import { ImageSliderDemo } from "../../components/common/ImageSlider/ImageSliderDemo";
import { InputTextDemo } from "../../components/common/InputText/InputTextDemo";
import { RadioButtonsDemo } from "../../components/common/RadioButtons/RadioButtonsDemo";
import { RangeSliderDemo } from "../../components/common/RangeSlider/RangeSliderDemo";
import { SelectDemo } from "../../components/common/Select/SelectDemo";
import styled from "styled-components/macro";

export const PresentationPage = () => {
    return (
        <>
            <PresentationWrap>
                <div>
                    <Button>Custom button</Button>
                </div>
                <CheckboxDemo></CheckboxDemo>
                <EditableSpanDemo></EditableSpanDemo>
                <ImageSliderDemo></ImageSliderDemo>
                <InputTextDemo></InputTextDemo>
                <div style={{ display: "flex" }}>
                    <RadioButtonsDemo></RadioButtonsDemo>
                </div>
                <div style={{ position: "relative" }}>
                    <RangeSliderDemo></RangeSliderDemo>
                </div>
                <SelectDemo></SelectDemo>
            </PresentationWrap>
        </>
    );
};

const PresentationWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;

    * {
        margin-bottom: 15px;
    }
`;
