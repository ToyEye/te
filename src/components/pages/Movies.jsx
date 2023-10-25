import { useState } from 'react';

export default function Movies() {
  const [searchValue, setSearchValue] = useState('');

  console.dir(searchValue);

  const hendleSubmitForm = evt => {
    evt.preventDefault();

    setSearchValue('');
  };

  const handleChange = evt => {
    const searchQueryValue = evt.target.value;
    setSearchValue(searchQueryValue);
  };

  return (
    <>
      <form onSubmit={hendleSubmitForm}>
        <input
          type="text"
          value={searchValue}
          placeholder="Введіть пошуковий запит"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
