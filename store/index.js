export const state = () => ({
  cart: [],
  cartPrice: 0
})

export const actions = {

}

export const mutations = {
  removeQuantity(state, item) {
    for (let i = 0; i < Object.keys(state.cart).length; i++) {
      if (state.cart[i].color === item.color && state.cart[i].id === item.id) {
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
      if (state.cart[i].color === item.color && state.cart[i].id === item.id) {
        state.cart[i].quantity++
        localStorage.setItem("cart", JSON.stringify(state.cart))
        return
      }
    }
    state.cart.push(item)
    localStorage.setItem("cart", JSON.stringify(state.cart))
  },


  addItemToCart(state, item) {
    if (state.cart.length !== 0) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].color === item.color && state.cart[i].id === item.id) {
          let cartTest = parseFloat(state.cart[i].quantity)
          cartTest += parseInt(item.quantity)
          state.cart[i].quantity = cartTest
          localStorage.setItem("cart", JSON.stringify(state.cart))
          return
        }
      }
      state.cart.push(item)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    }else {
      state.cart.push(item)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    }
  },


  removeItemFromCart(state, item) {
    for (let i = 0; i < Object.keys(state.cart).length; i++) {
      if (state.cart[i].color === item.color && state.cart[i].id === item.id) {
        state.cart.splice(i, 1)
        localStorage.setItem("cart", JSON.stringify(state.cart))
        return
      }
    }
    console.log(state.cart)
    localStorage.setItem("cart", JSON.stringify(state.cart))
  },
  setCartPrice(state, price) {
    state.cartPrice += price
  },
  updateCart(state, cart) {
    console.log("updated")
    state.cart = cart
  }
}
export const getters = {
  cart: state => state.cart,
  cartPrice: state => state.cartPrice
}

