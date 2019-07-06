import React, { Component } from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import md5 from 'crypto-js/md5';

import Search from '../../components/Search';

import ComicList from '../../components/ComicList';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    comics: [],
    loading: false,
    offset: 0,
  };

  componentDidMount() {
    this.handleLoadComics();
  }

  handleSearchCollaborators = async (collaborators) => {
    this.setState({
      loading: true,
    });
    const PUBLIC_KEY = 'cacbd73e61134d2e2e15577ecb1599f7';
    const PRIVATE_KEY = '4928a5e4354deee8c7704a3a4758e2fba4e9642a';
    const timestamp = Number(new Date());
    const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

    try {
      const response = await api.get(
        `characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}&name=${collaborators}`,
      );

      const result = response.data.data.results[0].comics.items.map(async (item) => {
        const id = item.resourceURI.split('/');
        const response = await api.get(
          `comics/${id[6]}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`,
        );
        const comic = response.data.data.results[0];
        return comic;
      });

      const comic = await Promise.all(result);

      this.setState({
        comics: comic,
        loading: false,
      });
    } catch (e) {
      this.setState({
        loading: false,
      });
    }
  };

  handleLoadComics = async () => {
    this.setState({
      loading: true,
    });
    const PUBLIC_KEY = 'cacbd73e61134d2e2e15577ecb1599f7';
    const PRIVATE_KEY = '4928a5e4354deee8c7704a3a4758e2fba4e9642a';
    const timestamp = Number(new Date());
    const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
    const limit = 10;
    const { offset } = this.state;

    try {
      const response = await api.get(
        `comics?ts=${timestamp}&limit=${limit}&apikey=${PUBLIC_KEY}&hash=${hash}&offset=${offset}`,
      );
      this.setState({
        comics: response.data.data.results,
        loading: false,
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { comics, loading } = this.state;
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={() => {}}
        hasMore={false}
        loader={(
          <div className="loader" key={0}>
            Loading ...
          </div>
)}
      >
        <Search sendSearch={this.handleSearchCollaborators} loading={loading} />
        <ComicList comics={comics} loading={loading} />
      </InfiniteScroll>
    );
  }
}
