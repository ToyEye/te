import { useState } from 'react';
import toast from 'react-hot-toast';

const FormSearching = ({ querySearchMovies }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmitForm = evt => {
    evt.preventDefault();

    if (!inputValue.trim()) {
      toast.error('Please enter something!');
      return;
    }

    const toLowerCaseSearchedValue = inputValue.toLowerCase();
    querySearchMovies(toLowerCaseSearchedValue);
    setInputValue('');
  };

  const handleInputChange = evt => {
    setInputValue(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введіть пошуковий запит"
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default FormSearching;
