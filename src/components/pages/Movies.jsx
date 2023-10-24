export default function Movies() {
  const hendleSubmitForm = evt => {
    evt.preventDefault();
  };

  return (
    <>
      <form onSubmit={hendleSubmitForm}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
