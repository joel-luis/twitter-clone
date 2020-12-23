import React from 'react';

import FollowSuggestion from '../FollowSuggestion';

import List from '../List';

import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Talves você curta"
          elements={[
            <FollowSuggestion name="Joel Luis" nickname="@joelluis" />,
            <FollowSuggestion name="Yasmin Felix" nickname="@yasminfelix" />,
            <FollowSuggestion name="Vanda Maria" nickname="@vandamaria" />,
          ]}
        />

        <List
          title="Talves você curta"
          elements={[<News />, <News />, <News />]}
        />
        <List
          title="Talves você curta"
          elements={[<News />, <News />, <News />]}
        />
        <List
          title="Talves você curta"
          elements={[<News />, <News />, <News />]}
        />
        <List
          title="Talves você curta"
          elements={[<News />, <News />, <News />]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;
