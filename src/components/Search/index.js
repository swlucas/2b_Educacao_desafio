import React, { Component } from 'react';

import { FaSearch, FaSpinner } from 'react-icons/fa'

import { Container, Form, SubmitButton } from './styles';

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
    const { searchInput } = this.state;
    const { loading } = this.props;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Personagem"
            value={searchInput}
            onChange={this.handleChange}
          />
          <SubmitButton loading={loading}>
             <FaSearch/>
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
