import React, { ReactNode, useRef, useState } from 'react';
import styled from 'styled-components';
import { fontSizes } from '../../../styles/themes';
import { fadeIn } from '../../../utils/animations';

type Side = 'left' | 'right' | 'top' | 'bottom';
type Mode = 'dark' | 'light';

interface Props {
  content: string | ReactNode;
  side?: Side;
  mode?: Mode;
}

type DisplayOptions = {
  side: Side;
  top: number | undefined;
  bottom: number | undefined;
  left: number | undefined;
  right: number | undefined;
};

// let timerHandler: ReturnType<typeof setTimeout> | undefined;
// const SHOW_DELAY = 500;
const MARGINS = {
  vertical: '15px',
  horizontal: '10px',
};

const Tooltip: React.FC<Props> = ({ children, content, mode, side }) => {
  const [shown, setShown] = useState(false);
  const [displayOptions, setDisplayOptions] = useState<DisplayOptions>({
    side: side || 'right',
    top: undefined,
    bottom: undefined,
    left: undefined,
    right: undefined,
  });

  const childEl = useRef(null);

  // const startTimer = () => {
  //   timerHandler = setTimeout(() => {
  //     setShown(true);
  //   }, SHOW_DELAY);
  // };
  //
  // const stopTimer = () => {
  //   clearTimeout(timerHandler);
  //   timerHandler = undefined;
  // };

  const setPosition = () => {
    if (childEl) {
      const {
        top,
        bottom,
        left,
        right,
        // @ts-ignore
      } = childEl.current.getBoundingClientRect();
      setDisplayOptions({ ...displayOptions, top, bottom, left, right });
    }
  };

  const init = () => {
    // startTimer();
    setPosition();
    setShown(true);
  };

  const end = () => {
    // stopTimer();
    setShown(false);
  };

  return (
    <Wrap onMouseOver={init} onMouseLeave={end}>
      <ChildWrap ref={childEl}>{children}</ChildWrap>
      {shown && (
        <Tip mode={mode || 'dark'} displayOptions={displayOptions}>
          {content}
        </Tip>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
`;

const ChildWrap = styled.div``;

interface TipProps {
  displayOptions: DisplayOptions;
  mode: Mode;
}

const calcPositions = ({ displayOptions }: TipProps): string => {
  return `
    ${
      displayOptions.side === 'right'
        ? `left: calc(${displayOptions.right}px + ${MARGINS.horizontal});
        top: 50%;
        transform: translateY(-50%);
    `
        : ''
    }
    ${
      displayOptions.side === 'left'
        ? `right: calc(${displayOptions.left}px + ${MARGINS.horizontal});
        top: 50%;
        transform: translateY(-50%);
    `
        : ''
    }
    ${
      displayOptions.side === 'top'
        ? `bottom: calc(${displayOptions.bottom}px + ${MARGINS.vertical});
        left: 50%;
        transform: translateX(-50%);
    `
        : ''
    }
    ${
      displayOptions.side === 'bottom'
        ? `top: calc(${displayOptions.top}px + ${MARGINS.vertical});
        left: 50%;
        transform: translateX(-50%);
    `
        : ''
    }
  `;
};

const Tip = styled.div`
  position: absolute;
  z-index: 1000;
  padding: 5px 9px;
  border-radius: 4px;
  ${(props: TipProps) => calcPositions(props)}
  white-space: nowrap;
  /* eslint-disable-next-line */
  background: ${(props: TipProps) => `var(--tooltip-${props.mode}-bckg)`};
  /* eslint-disable-next-line */
  color: ${(props: TipProps) => `var(--tooltip-${props.mode}-text)`};
  font-size: ${fontSizes.regular};

  ${fadeIn()}
`;

export default Tooltip;
