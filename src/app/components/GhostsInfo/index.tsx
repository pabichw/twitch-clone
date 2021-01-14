import React from 'react';
import { GhostsSVG } from '../../__assets/GhostsSVG';
import styled from 'styled-components';

interface Props {
  headerText: string;
  descriptionText: string;
}

const GhostsInfo: React.FC<Props> = ({ headerText, descriptionText }) => {
  return (
    <Content>
      <Left>
        <LeftImgWrap>
          <GhostsSVG />
        </LeftImgWrap>
      </Left>
      <Right>
        <HeaderText>{headerText}</HeaderText>
        <SubHeaderText>{descriptionText}</SubHeaderText>
      </Right>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Left = styled.div`
  width: 241px;
`;

const LeftImgWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderText = styled.h3`
  margin: 0 0 10px 0;
`;
const SubHeaderText = styled.h5`
  color: var(--font-secondary);
  margin: 0;
`;

export default GhostsInfo;
