import React, { Component } from 'react';

import { Container, Form } from './styles';

export default class Search extends Component {
  state = {
    searchInput: '',
  };

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.sendSearch(this.state.searchInput);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Personagem"
            value={this.state.searchInput}
            onChange={this.handleChange}
          />
          <button type="submit">ok</button>
        </Form>
      </Container>
    );
  }
}
