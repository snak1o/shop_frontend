export const state = () => ({
  cart: [],
  cartProducts: [],
  cartPrice: 0,
  shipping: null,
  emailConfirmed: null,
})

export const actions = {
  async setProducts({commit, state}) {
    let products = []
    let cart = state.cart
    for (let prod in cart) {
      try {
        const res = await this.$axios.get('/items/' + cart[prod].itemId)
        if (res && res.status === 200) {
          let quantity = cart[prod].quantity
          let item = res.data
          try {
            const res = await this.$axios.get('/colors/' + cart[prod].colorId)
            if (res && res.status === 200) {
              let color = res.data
              products.push({...item, quantity, color})
            }
          }catch (e) {
            console.log(e)
          }
        }
        else {
          this.cart = []
          localStorage.setItem('cart', JSON.stringify([]))
        }
      } catch (e) {
        console.log(e.message)
      }
    }
    commit('setCartProducts', products)
  },
}
export const mutations = {
  async addToCart(state, {itemId, colorId, quantity}) {
    for (let i = 0; i < state.cart.length; i++) {
      if (state.cart[i].itemId === itemId && state.cart[i].colorId === colorId) {
        state.cart[i].quantity++
        localStorage.setItem("cart", JSON.stringify(state.cart))
        await this.dispatch('setProducts')
        return
      }
    }
    state.cart.push({itemId, colorId, quantity})
    localStorage.setItem("cart", JSON.stringify(state.cart))
    await this.dispatch('setProducts')
  },
  async decreaseQuantity(state, {itemId, colorId, quantity}) {
    for (let i = 0; i < state.cart.length; i++) {
      if (state.cart[i].itemId === itemId && state.cart[i].colorId === colorId) {
        if (state.cart[i].quantity > 1) {
          state.cart[i].quantity--
          localStorage.setItem("cart", JSON.stringify(state.cart))
          await this.dispatch('setProducts')
          return
        }
        else {
          state.cart.splice(i, 1)
          localStorage.setItem('cart', JSON.stringify(state.cart))
          await this.dispatch('setProducts')
        }
      }
    }
  },
  async removeFromCart(state, {itemId, colorId}) {
    for (let i = 0; i < state.cart.length; i++) {
      if (state.cart[i].itemId === itemId && state.cart[i].colorId === colorId) {
        state.cart.splice(i, 1)
        localStorage.setItem('cart', JSON.stringify(state.cart))
        await this.dispatch('setProducts')
      }
    }
  },
  updateCart(state, cart) {
    state.cart = cart
  },
  setShipping(state, shipping) {
    state.shipping = shipping
  },
  setEmailConfirmed(state, payload) {
    state.emailConfirmed = payload
  },
  setCartPrice(state, payload) {
    state.cartPrice = payload
  },
  setCartProducts(state, payload) {
    state.cartProducts = payload
  }
}
export const getters = {
  cart: state => state.cart,
  shipping: state => state.shipping,
  emailConfirmed: state => state.emailConfirmed,
  cartPrice: state => state.cartPrice,
  cartProducts: state => state.cartProducts
}

