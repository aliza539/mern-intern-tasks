'use client'

type Props = {
  category: string;
  setCategory: (val: string) => void;
};

export default function Filter({ category, setCategory }: Props) {
  return (
    <select 
      value={category} 
      onChange={(e) => setCategory(e.target.value)}
      className="px-4 py-2 mx-5 my-5 border border-gray-300 rounded-md bg-white text-gray-900 cursor-pointer hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
    >
      <option value="">All</option>
      <option value="electronics">Electronics</option>
      <option value="clothing">Clothing</option>
    </select>
  );
}