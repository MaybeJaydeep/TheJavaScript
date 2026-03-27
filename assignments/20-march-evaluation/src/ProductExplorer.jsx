import React, { useEffect } from "react";
import { useProducts } from "./hooks/useProducts";
import { useCart } from "./context/CartContext";

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
    limit,
  } = useProducts();

  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      {loading ? <h2>Loading...</h2> : null}

      {/* Cart Section */}
      <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px", borderRadius: "8px" }}>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {cart.map((item) => (
                <li key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
                  <span>{item.title} (x{item.qty})</span>
                  <span>
                    Price: ${item.price * item.qty}
                    <button style={{ marginLeft: "10px" }} onClick={() => removeFromCart(item.id)}>Remove</button>
                  </span>
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
              <span>Total: ${cart.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2)}</span>
              <button onClick={clearCart}>Clear Cart</button>
            </div>
          </>
        )}
      </div>

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
            <button onClick={() => addToCart(p)}>Add To Cart</button>
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
