import React from 'react';
import propTypes from 'prop-types';

export default class HelloWorld extends React.Component {
 render() {
 return <p>Olá {this.props.nome}</p>;
 }
}

HelloWorld.propTypes = {
    nome: propTypes.string.isRequired
}