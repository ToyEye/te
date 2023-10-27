import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

const FormSearching = ({ onSearch }) => {
  //   const SubmitForm = evt => {
  //     evt.preventDefault();
  //     const inputValue = evt.target.elements.queryValueSearch.value.toLowerCase();

  //     params.set('query', inputValue);
  //     setParams(params);
  //   };

  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = evt => {
    setSearchValue(evt.target.value.toLowerCase());
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        onChange={handleInputChange}
        type="text"
        value={searchValue}
        placeholder="Введіть пошуковий запит"
        name="queryValueSearch"
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default FormSearching;
