import { useState } from 'react';
import s from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInput = ({ target: { name, value } }) => {
    setSearchQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    reset();
  };

  const reset = () => {
    setSearchQuery('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
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

export default Searchbar;
