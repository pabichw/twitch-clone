import React from 'react';
import { Game } from '../../../../types/Twitch';
import {
  LoadingPlaceholder,
  Placeholder,
} from '../../../components/Placeholders/LoadingPlaceholder';
import styled from 'styled-components';
import { getImageOfSize } from '../../../../utils/other';
import { fontSizes, fontWeights } from '../../../../styles/themes';

interface Props {
  category: Game | null;
  isLoading: boolean;
}

const CategoryHeader: React.FC<Props> = ({ category, isLoading }) => {
  return (
    <Container>
      {isLoading || !category ? (
        <LoadingWrapper>
          <LoadingPlaceholder type={Placeholder.GAME_THUMBNAIL} />
        </LoadingWrapper>
      ) : (
        <>
          <Image
            src={getImageOfSize((category as Game).box_art_url, 144, 192)}
          />
          <TextContainer>
            <Title>{category.name}</Title>
          </TextContainer>
        </>
      )}
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  min-height: 192px;
  display: flex;
  align-items: center;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 192px;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%:
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

const Title = styled.h2`
  font-size: ${fontSizes.huge};
  font-weight: ${fontWeights.superBold};
`;

const Image = styled.img`
  width: 144px;
  height: 192px;
`;

export default CategoryHeader;
