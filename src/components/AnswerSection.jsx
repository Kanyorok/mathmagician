import React from 'react';
import PropTypes from 'prop-types';

export default function AnswerSection({ output, nextVal, operation }) {
  return (
    <div>
      <span>{output}</span>
      <span>{operation}</span>
      <span>
        {output === '' && operation === '' && nextVal === '' ? '0' : nextVal}
      </span>
    </div>
  );
}

AnswerSection.propTypes = {
  output: PropTypes.string.isRequired,
  nextVal: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};
