import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import ProfileSVG from '../../../__assets/ProfileSVG';
import { BUTTON } from '../../../../types/UITypes';

type AnonUserContainerProps = {
  onProfileIconClick: () => void;
  onSignInClick: () => void;
  onSignUpClick: () => void;
};

const AnonUserContainer: FunctionComponent<AnonUserContainerProps> = ({
  onProfileIconClick,
  onSignInClick,
  onSignUpClick,
}) => (
  <Container>
    <Button type={BUTTON.SECONDARY} text="Log In" onClick={onSignInClick} />
    <Button type={BUTTON.PRIMARY} text="Sign Up" onClick={onSignUpClick} />
    <Button
      type={BUTTON.ICON}
      icon={
        <IconWrap>
          <ProfileSVG />
        </IconWrap>
      }
      onClick={onProfileIconClick}
    />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const IconWrap = styled.div`
  height: 20px;
  width: 20px;
`;

export default AnonUserContainer;
