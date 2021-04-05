import React from "react";
import { Container } from "../../components/layout/Container";
import { Loader } from "../../components/common/Loader/Loader";
import styled from "styled-components/macro";

export const PresentationPage = (props: any) => {
    return (
        <>
            <StyledContainer>
                <CardsWrapper>
                    <PresentationCard>
                        <Loader/>
                    </PresentationCard>
                </CardsWrapper>
            </StyledContainer>
        </>
    );
};

const StyledContainer = styled(Container)`
  margin-left: -30px;
`

const CardsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const PresentationCard = styled.div`
  position: relative;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 300px;

  margin: 0 0 30px 30px;
  padding: 30px;
  height: 300px;

  background-color: ${({theme}) => theme.color.white};
  
  border: 1px solid ${({theme}) => theme.color.grey["100"]};
  box-shadow: ${({theme}) => theme.shadow["1"]};
  border-radius: 10px;
`
