import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import s from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');
  const inputEl = useRef(null);

  const handleInput = ({ target: { name, value } }) => {
    setSearchQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const trimedSearchQuery = searchQuery.trim();
    if (trimedSearchQuery === '') {
      inputEl.current.focus();
      inputEl.current.placeholder = 'Please enter some movie title';
      reset();
      return;
    }
    inputEl.current.placeholder = 'Enter movie title';
    onSubmit(trimedSearchQuery);
    reset();
  };

  const reset = () => {
    setSearchQuery('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        ref={inputEl}
        className={s.input}
        name="searchQuery"
        value={searchQuery}
        type="text"
        autoComplete="off"
        placeholder="Enter movie title"
        autoFocus
        onInput={handleInput}
      />
      <button className={s.button} type="submit">
        Search
      </button>
    </form>
  );
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
