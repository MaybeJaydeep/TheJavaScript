import React, { useEffect } from "react";
import { useProducts } from "./hooks/useProducts";

  const ProductExplorer = () => {

  const {
    products,
    loading,
    search,
    setSearch,
    sortBy,
    setSortBy,
    order,
    setOrder,
    category,
    setCategory,
    categories,
    page,
    setPage,
    total,
    limit
  } = useProducts()

  return (
    <div>
      {loading ? <h2>Loading...</h2> : null}

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />
      <select
        onChange={(e) => {
          const val = e.target.value;

          if (val === "priceAsc") {
            setSortBy("price");
            setOrder("asc");
          }

          if (val === "priceDesc") {
            setSortBy("price");
            setOrder("desc");
          }

          if (val === "ratingAsc") {
            setSortBy("rating");
            setOrder("asc");
          }

          if (val === "ratingDesc") {
            setSortBy("rating");
            setOrder("desc");
          }

          setPage(1);
        }}
      >
        <option value="">Sort</option>
        <option value="priceAsc">Price (low to high)</option>
        <option value="priceDesc">Price (High to low)</option>
        <option value="ratingAsc">Rating (low to high)</option>
        <option value="ratingDesc">Rating (High to low)</option>
      </select>

      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setPage(1);
        }}
      >
        <option value="">All Categories</option>

        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="card">
            <img src={p.thumbnail} width={120} />
            <h3>{p.title}</h3>
            <p>Price: ${p.price}</p>
            <p>Rating: {p.rating}</p>
            <p>Stock: {p.stock}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>Page {page}</span>

        <button
          disabled={page * limit >= total}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductExplorer;
