

function Filter( Props) {
  return (
    <select value={Props.category} onChange={(e) => Props.setCategory(e.target.value)}>
      <option value="">All</option>
      <option value="electronics">Electronics</option>
      <option value="clothing">Clothing</option>
    </select>
  );
}

export default Filter;