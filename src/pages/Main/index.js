import React, { Component } from 'react';

import { Container } from './styles';

import Search from '../../components/Search';

import ComicList from '../../components/ComicList';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    comics: [],
  };

  componentDidMount() {
    this.handleSearchCollaborators();
  }

  handleSearchCollaborators = async (collaborators) => {
    try {
      const response = await api.get('');
      this.setState({
        comics: response.data.data.results,
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Container>
        <Search sendSearch={this.handleSearchCollaborators} />
        <ComicList comics={this.state.comics} />
      </Container>
    );
  }
}
