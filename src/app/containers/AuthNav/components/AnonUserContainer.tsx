import React, { FunctionComponent } from 'react';
import Button from '../../../components/Button';
import ProfileSVG from '../../../__assets/ProfileSVG';
import { BUTTON } from '../../../../types/UITypes';
import MoreSvg from '../../../__assets/MoreSvg';
import styled from 'styled-components';

type AnonUserContainerProps = {
  onProfileIconClick: () => void;
  onSignInClick: () => void;
  onSignUpClick: () => void;
  isMobile: boolean;
};

const AnonUserContainer: FunctionComponent<AnonUserContainerProps> = ({
  onProfileIconClick,
  onSignInClick,
  onSignUpClick,
  isMobile,
}) => (
  <Container>
    {isMobile ? (
      <MoreWrapper>
        <Button type={BUTTON.TRANSPARENT} icon={<MoreSvg />} />
      </MoreWrapper>
    ) : (
      <>
        <Button type={BUTTON.SECONDARY} text="Log In" onClick={onSignInClick} />
        <Button type={BUTTON.PRIMARY} text="Sign Up" onClick={onSignUpClick} />
        <Button
          type={BUTTON.TRANSPARENT}
          icon={
            <IconWrap>
              <ProfileSVG />
            </IconWrap>
          }
          onClick={onProfileIconClick}
        />
      </>
    )}
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

const MoreWrapper = styled.div``;

export default AnonUserContainer;
