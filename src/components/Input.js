import React, { Component } from 'react';
import PropType from 'prop-types';

export default class Input extends Component {
  render() {
    const { id, test, label, value, type, changeValue } = this.props;
    return (
      <label htmlFor={ id }>
        {`${label}: `}
        <input
          type={ type }
          name={ id }
          id={ id }
          data-testid={ `${test}` }
          value={ value }
          onChange={ changeValue }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropType.string.isRequired,
  test: PropType.string.isRequired,
  label: PropType.string.isRequired,
  value: PropType.string.isRequired,
  type: PropType.string.isRequired,
  changeValue: PropType.func.isRequired,
};
