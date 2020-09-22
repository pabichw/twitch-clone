import React, { Component } from 'react';
import styled from 'styled-components';

const cats = ['Music', 'Esport'];

class Categories extends Component {
  render() {
    return (
      <List>
        {cats.map(cat => (
          <Category>{cat}</Category>
        ))}
      </List>
    );
  }
}

const List = styled.ul`
  list-style: none:
`;

const Category = styled.li`
  background-color: red;
`;

export default Categories;
