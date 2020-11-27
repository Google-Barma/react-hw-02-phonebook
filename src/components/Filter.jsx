export default function Filter({ value, onChangeFilter }) {
  return (
    <>
      <label name="filter" htmlFor="filter" value={value}>
        Find contacts by name
      </label>
      <input
        value={value}
        type="text"
        id="filter"
        onChange={e => onChangeFilter(e.target.value)}
      />
    </>
  );
}
