import React from 'react';
import { Link } from 'react-router-dom';

import { FaSpinner } from 'react-icons/fa';

import { Container, Comic } from './styles';

const ComicList = ({ comics, loading }) => (
  <Container>
    {loading && <FaSpinner color="#FFF" />}
    {comics.map(comic => (
      <Comic>
        <Link
          to={`/comic/${comic.id}`}
          style={{ textDecoration: 'none', color: '#FFF' }}
          params={comic}
        >
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
        </Link>
      </Comic>
    ))}
  </Container>
);

export default ComicList;
