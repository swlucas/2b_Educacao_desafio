import React from 'react';

import { Container, Comic } from './styles';

// eslint-disable-next-line react/prop-types
const ComicList = ({ comics }) => (
  <Container>
    {comics.map(comic => (
      <Comic>
        <header>
          <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="" />
          <strong>{comic.title}</strong>
          {/* <small>{comic.description}</small> */}
        </header>

        <ul>
          {comic.creators.items.map(creator => (
            <li>
              {creator.role} <small>{creator.name}</small>
            </li>
          ))}
        </ul>
      </Comic>
    ))}
  </Container>
);

export default ComicList;
