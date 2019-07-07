import React from 'react';

import { Container, Comic } from './styles';

const ComicList = ({ comic }) => (
  <Container>
    <Comic>
      <header>
        {/* <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="" /> */}
        <strong>{comic.title}</strong>
        <small>{comic.description}</small>
      </header>

      <ul>
        {/* {comic.creators.items.map(creator => (
          <li>
            {creator.role} <small>{creator.name}</small>
          </li>
        ))} */}
      </ul>
    </Comic>
  </Container>
);

export default ComicList;
