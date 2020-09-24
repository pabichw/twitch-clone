import React, { Component } from 'react';
import styled from 'styled-components';
import { fontSizes } from '../../../styles/themes';
import { sizes } from '../../../styles/media';

const cats = [
  { label: 'Browse', href: '/directory/' },
  { label: 'Esports', href: '/directory/esports' },
  { label: 'Music', href: '/directory/music' },
];

class Categories extends Component {
  render() {
    return (
      <List>
        {cats.map(cat => (
          <Category>{cat.label}</Category>
        ))}
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
  cursor: pointer;

  :first-child {
    border-right: 1px solid var(--separator-color);
  }

  :hover {
    color: var(--primary);
  }

  @media only screen and (max-width: ${sizes.medium}px) {
    font-size: ${fontSizes.regular2};
  }
`;

export default Categories;
