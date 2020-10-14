import React, { Component } from 'react';
import styled from 'styled-components';
import { BUTTON } from '../../../types/UITypes';
import Button from '../Button';
import { fontSizes } from '../../../styles/themes';
import LoopSvg from '../../__assets/LoopSVG';

interface SearchBarProps {
  onSearch: (query: string | undefined) => void;
}
interface SearchBarState {
  query: string | undefined;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  state = {
    query: undefined,
  };

  handleQueryChange = e => {
    const { value } = e.target;
    this.setState({ query: value });
  };

  handleSearch = () => {
    const { query } = this.state;
    const { onSearch } = this.props;

    if (query) {
      console.log('asdas', query);
      onSearch(query);
    }
  };

  render() {
    const { query } = this.state;

    return (
      <Wrapper>
        <Input
          type="text"
          placeholder="Search"
          value={query}
          onChange={this.handleQueryChange}
        />
        <ButtonWrapper>
          <Button
            type={BUTTON.FIT_PARENT}
            onClick={this.handleSearch}
            icon={<LoopSvg />}
          />
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 390px;
  height: 36px;
`;

const Input = styled.input`
  background-color: var(--input-background);
  color: var(--font-normal);
  font-size: ${fontSizes.regular2};
  height: 100%;
  flex: 1;
  max-width: 334px;
  border: none;
  padding: 5px 10px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  &:focus {
    background-color: var(--background);
    box-shadow: inner 0 0 0 2px var(--primaryLight);
    outline: none;

    -webkit-box-shadow: inset 0px 0px 0px 2px var(--primaryLight);
    -moz-box-shadow: inset 0px 0px 0px 2px var(--primaryLight);
  }

  &:hover:not(:focus) {
    box-shadow: inner 0 0 0 2px var(--secondaryHover);

    -webkit-box-shadow: inset 0px 0px 0px 2px var(--secondaryHover);
    -moz-box-shadow: inset 0px 0px 0px 2px var(--secondaryHover);
  }
`;

const ButtonWrapper = styled.div`
  background-color: var(--secondary);
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  width: 34px;
  margin-left: 1px;
`;

export default SearchBar;
