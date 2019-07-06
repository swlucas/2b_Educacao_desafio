import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import api from '../../services/api';

export default class Comic extends Component {
  async componentDidMount() {
    const { match } = this.props;
    console.log(match);
    const { id } = match.params;
    this.handleLoadComics(id);
  }

  handleLoadComics = async (id) => {
    const PUBLIC_KEY = 'cacbd73e61134d2e2e15577ecb1599f7';
    const PRIVATE_KEY = '4928a5e4354deee8c7704a3a4758e2fba4e9642a';
    const timestamp = Number(new Date());
    const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
    const limit = 10;

    try {
      const response = await api.get(
        `comics/${id}?ts=${timestamp}&limit=${limit}&apikey=${PUBLIC_KEY}&hash=${hash}`,
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return <h1>oi</h1>;
  }
}
