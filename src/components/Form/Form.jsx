const FormSearching = ({ querySearchMovies, defaultValue }) => {
  const handleSubmitForm = evt => {
    evt.preventDefault();
    const inputValue = evt.target.elements.queryValueSearch.value.toLowerCase();

    querySearchMovies(inputValue);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        // заюзав defaultValue замість value, тому що для нього тре onChange, а value я передаю із пропсів.
        defaultValue={defaultValue}
        placeholder="Введіть пошуковий запит"
        name="queryValueSearch"
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default FormSearching;
