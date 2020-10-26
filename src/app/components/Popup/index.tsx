import React, { Component, ReactNode } from 'react';
import { togglePopup } from '../../../store/layout/actions';
import { connect } from 'react-redux';
import { RootState } from '../../../types';
import styled from 'styled-components';
import { palette } from '../../../styles/themes';
import Button from '../Button';
import { BUTTON } from '../../../types/UITypes';
import { CrossSvg } from '../../__assets/CrossSVG';

interface PopupState {}

interface PopupProps {
  content: string | ReactNode;
  togglePopup: (any) => void;
}

class Popup extends Component<PopupProps, PopupState> {
  render() {
    const { content, togglePopup } = this.props;
    return (
      <PopupWrap
        onClick={() => togglePopup({ isVisible: false, content: null })}
      >
        <ContentWrap>
          {content}
          <CloseWrap>
            <Button
              type={BUTTON.TRANSPARENT}
              icon={
                <CrossIconWrap>
                  <CrossSvg />
                </CrossIconWrap>
              }
              onClick={() => togglePopup({ isVisible: false, content: null })}
            />
          </CloseWrap>
        </ContentWrap>
      </PopupWrap>
    );
  }
}

const PopupWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${palette.darkTransparent};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
`;

const ContentWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CrossIconWrap = styled.div`
  width: 30px;
  height: 30px;
`;

const CloseWrap = styled.div``;
const mapState = (state: RootState) => ({
  content: state.layout.popup.content,
});

const mapDispatch = {
  togglePopup,
};

export default connect(mapState, mapDispatch)(Popup);
