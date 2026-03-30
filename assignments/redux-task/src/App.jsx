import { useState, useEffect } from 'react'; // Added useState and useEffect
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from './redux/cartSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  
  const cartItems = useSelector((state) => state.cart.items);

  const total = Number(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2));

  if (loading) return <div className="loading-screen">Loading beautiful products...</div>;

  return (
    <div className="container">
      <header>
        <h1>Redux Shop</h1>
        <div className="cart-summary">
          🛒 {cartItems.length} items (${total})
        </div>
      </header>

      <main>
      
        <section className="product-list">
          <h2>Products</h2>
          <div className="grid">
            {products.map((product) => (
              <div key={product.id} className="card">
                <img src={product.thumbnail} alt={product.title} /> 
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <button onClick={() => dispatch(addToCart({
                  id: product.id,
                  name: product.title,
                  price: product.price,
                  image: product.thumbnail
                }))}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

    
        <section className="cart-section">
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p className="empty-msg">Your cart is empty.</p>
          ) : (
            <>
              <ul className="cart-list">
                {cartItems.map((item) => (
                  <li key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <strong>{item.name}</strong>
                      <span>${item.price} x {item.quantity}</span>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-footer">
                <strong>Total: ${total}</strong>
                <button 
                  className="clear-btn"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear All
                </button>
              </div>
            </>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;

