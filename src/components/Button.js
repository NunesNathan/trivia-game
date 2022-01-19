import React from 'react';
import PropType from 'prop-types';

class Button extends React.Component {
  render() {
    const { text, test, style, onClick, className, disabled } = this.props;
    return (
      <button
        data-testid={ `${test}` }
        type="button"
        disabled={ disabled }
        className={ className }
        style={ style }
        onClick={ onClick }
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropType.string.isRequired,
  test: PropType.string.isRequired,
  className: PropType.string,
  style: PropType.shape({
    border: PropType.string,
  }),
  disabled: PropType.bool,
  onClick: PropType.func.isRequired,
};

Button.defaultProps = {
  style: { border: '' },
  disabled: false,
  className: '',
};

export default Button;
