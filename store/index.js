export const state = () => ({
  cart: [],
  cartPrice: 0,
})

export const actions = {
}

export const mutations = {
  removeQuantity(state, item) {
    for (let i = 0; i < Object.keys(state.cart).length; i++) {
      if (state.cart[i].selectedColor.id === item.selectedColor.id && state.cart[i].id === item.id) {
        state.cart[i].quantity--
        localStorage.setItem("cart", JSON.stringify(state.cart))
        return
      }
    }
    state.cart.push(item)
    localStorage.setItem("cart", JSON.stringify(state.cart))
  },
  addQuantity(state, item) {
    for (let i = 0; i < state.cart.length; i++) {
      if (state.cart[i].selectedColor.id === item.selectedColor.id && state.cart[i].id === item.id) {
        state.cart[i].quantity++
        localStorage.setItem("cart", JSON.stringify(state.cart))
        return
      }
    }
    state.cart.push(item)
    localStorage.setItem("cart", JSON.stringify(state.cart))
  },

  removeItemFromCart(state, item) {
    for (let i = 0; i < Object.keys(state.cart).length; i++) {
      if (state.cart[i].selectedColor.id === item.selectedColor.id && state.cart[i].id === item.id) {
        state.cart.splice(i, 1)
        localStorage.setItem("cart", JSON.stringify(state.cart))
        return
      }
    }
    localStorage.setItem("cart", JSON.stringify(state.cart))
  },
  setCartPrice(state, price) {
    state.cartPrice = price
  },
  updateCart(state, cart) {
    state.cart = cart
  },
}
export const getters = {
  cart: state => state.cart,
  cartPrice: state => state.cartPrice,
}

