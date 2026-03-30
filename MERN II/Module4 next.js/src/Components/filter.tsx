'use client'

type Props = {
  category: string;
  setCategory: (val: string) => void;
};

export default function Filter({ category, setCategory }: Props) {
  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="">All</option>
      <option value="electronics">Electronics</option>
      <option value="clothing">Clothing</option>
    </select>
  );
}