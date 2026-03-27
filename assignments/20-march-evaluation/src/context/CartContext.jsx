import { createContext, useContext, useReducer } from "react"

const CartContext = createContext()

const cartReducer = (state, action) => {

  switch (action.type) {

    case "ADD":

      const exists = state.find(p => p.id === action.payload.id)

      if (exists) {
        return state.map(p =>
          p.id === action.payload.id
            ? { ...p, qty: p.qty + 1 }
            : p
        )
      }

      return [...state, { ...action.payload, qty: 1 }]

    case "REMOVE":
      return state.filter(p => p.id !== action.payload)

    case "CLEAR":
      return []

    default:
      return state
  }

}

export const CartProvider = ({ children }) => {

  const [cart, dispatch] = useReducer(cartReducer, [])

  const addToCart = (product) => {
    dispatch({ type: "ADD", payload: product })
  }

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR" })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}


export const useCart = () => {
  return useContext(CartContext)
}
/*
Difference in context and redux
when and where to use it
R&D => redux thunks, redux saga
*/
