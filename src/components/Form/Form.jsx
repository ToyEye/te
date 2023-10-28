// import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FormSearching = ({ querySearchMovies }) => {
  const handleSubmitForm = evt => {
    evt.preventDefault();
    const inputValue = evt.target.elements.queryValueSearch.value.toLowerCase();

    querySearchMovies(inputValue);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        // value={query}
        placeholder="Введіть пошуковий запит"
        name="queryValueSearch"
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default FormSearching;
