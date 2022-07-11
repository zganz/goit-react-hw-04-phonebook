export const Filter = ({ value, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        name="filter"
        onChange={evt => handleChange(evt.target.value)}
        value={value}
      />
    </div>
  );
};
