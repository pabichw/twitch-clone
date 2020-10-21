import React from 'react';
import styled from 'styled-components';
import { fontWeights } from '../../../../styles/themes';
import { Game } from '../../../../types/Twitch';
import { Fade } from '@material-ui/core';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { MOBILE_BREAKPOINT } from '../../../../styles/media';
import GameThumbnail from './GameThumbnail';

interface SectionProps {
  label?: string;
  games: Array<Game>;
  loading: boolean;
}

interface SectionState {
  fade: boolean;
  lastRender: Date;
}

class SectionGames extends React.Component<
  RouteComponentProps<{}> & SectionProps,
  SectionState
> {
  constructor(props) {
    super(props);
    this.state = {
      fade: false, // for initial fade in animation
      lastRender: new Date(), // just to force rerendering on resize
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ lastRender: new Date() });
    });

    this.setState({ fade: true });
  }

  onGameClickHandle = (game: Game): void => {
    this.props.history.push(
      encodeURI(`/browse/game/${game.name}?cat_id=${game.id}`),
    );
  };

  render() {
    const { fade } = this.state;
    const { label, games, loading } = this.props;

    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const minPxWidthForStream = isMobile ? 100 : 140;
    const magicNumber = isMobile ? 150 : 100;
    const sectionId = `stream-row-${label}`;
    const articleElem = document.getElementById('article');

    console.log('games', games);
    return (
      <Fade in={fade}>
        <SectionContainer>
          {label && <Label>{label}</Label>}
          <Row id={sectionId}>
            {games.map((game: Game, idx: number) => {
              let isTooNarrow;
              if (articleElem) {
                isTooNarrow =
                  articleElem.offsetWidth - magicNumber <
                  (minPxWidthForStream - 10) * (idx + 1); // min - padding left/right
              }
              return (
                !isTooNarrow && (
                  <GameThumbnail
                    loading={loading}
                    key={`game-${game.id}`}
                    game={game}
                    onGameClick={() => this.onGameClickHandle(game)}
                  />
                )
              );
            })}
          </Row>
        </SectionContainer>
      </Fade>
    );
  }
}

const SectionContainer = styled.section`
  width: 100%;
  padding: 20px 30px;
`;

const Row = styled.div`
  display: flex;
  overflow-x: hidden;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  flex: 1;
  padding-bottom: 20px;
`;

const Label = styled.span`
  display: inline-block;
  font-weight: ${fontWeights.bold};
  margin-bottom: 10px;
`;

// @ts-ignore
export default withRouter(SectionGames);
