import React, { useState, useMemo } from "react";
import SearchBar from "./components/searchbar";
import ProductList from "./components/productlist";
import useDebounce from "./hooks/usedebounce";
import useFetch from "./hooks/usefetch";

function App() {
  const [query, setQuery] = useState("");

 
  const debouncedQuery = useDebounce(query, 400);

 
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products`
  );

 
  const filteredProducts = useMemo(() => {
    if (!debouncedQuery) return data;

    return data
      .filter((p) =>
        p.title.toLowerCase().includes(debouncedQuery.toLowerCase())
      )
      .sort((a, b) => a.price - b.price);
  }, [debouncedQuery, data]);

  return (
    <div>
      <h1>Live Search</h1>

      <SearchBar query={query} setQuery={setQuery} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;