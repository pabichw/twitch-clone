import React, { Component } from 'react';
import styled from 'styled-components';
import { fontSizes, fontWeights } from '../../../styles/themes';
import { MOBILE_BREAKPOINT, sizes } from '../../../styles/media';
import MusicSvg from '../../__assets/MusicSvg';
import HeartSvg from '../../__assets/HeartSvg';
import TrophySvg from '../../__assets/TrophySvg';

const cats = [
  { label: 'Browse', href: '/directory/', icon: <HeartSvg /> },
  { label: 'Esports', href: '/directory/esports', icon: <TrophySvg /> },
  { label: 'Music', href: '/directory/music', icon: <MusicSvg /> },
];

interface CategoriesProps {
  isMobile?: boolean;
}

class Categories extends Component<CategoriesProps> {
  render() {
    const { isMobile } = this.props;
    return (
      <List>
        {cats.map(cat =>
          isMobile ? (
            <MobileCategory>{cat.icon}</MobileCategory>
          ) : (
            <Category>{cat.label}</Category>
          ),
        )}
      </List>
    );
  }
}

const List = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 11px;
`;

const Category = styled.li`
  line-height: 1.5rem;
  padding: 0 20px;
  font-size: ${fontSizes.big};
  font-weight: ${fontWeights.bold};
  cursor: pointer;

  :first-child {
    border-right: 1px solid var(--separator-color);
  }

  :hover {
    color: var(--primary);
  }

  @media only screen and (max-width: ${sizes.large}px) {
    font-size: ${fontSizes.regular2};
  }
`;

const MobileCategory = styled.li`
  padding: 0 20px;
  cursor: pointer;

  :first-child {
    border-right: 1px solid var(--separator-color);
  }

  &:hover {
    color: var(--primary);
  }
`;

export default Categories;
