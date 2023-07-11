import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import './styles.css';

// eslint-disable-next-line react/function-component-definition
const NewTodo = ({ onNewTodo }) => {
  const [value, setValue] = useState('');

  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const erase = () => {
    setValue('');
  };

  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      erase();
    }
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };
  return (
    <input
      className="new-todo"
      placeholder="Adicione uma tarefa"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

NewTodo.propTypes = {
  onNewTodo: PropTypes.isRequired,
};

export default NewTodo;
