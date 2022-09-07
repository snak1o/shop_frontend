<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg" v-if="getOrders.length > 0">
    <table class="w-full md:w-full text-sm text-left text-gray-500" >
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3">
          ID
        </th>
        <th scope="col" class="px-6 py-3">
          Date
        </th>
        <th scope="col" class="px-6 py-3">
          Status
        </th>
        <th scope="col" class="px-6 py-3">
          Tracking code
        </th>
        <th scope="col" class="px-6 py-3">
          Total price
        </th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr class="bg-white border-b" v-for="order in getOrders">
        <td class="px-6 py-4 font-semibold">
          {{order.id}}
        </td>
        <th class="px-6 py-4 font-normal">
          {{formatDate(order.createdAt)}}
        </th>
        <td class="px-6 py-4 font-semibold" :class="order.status === 'Completed' ? 'text-green-600' : 'text-indigo-600'">
          {{order.status}}
        </td>
        <td class="px-6 py-4">
          code
        </td>
        <td class="px-6 py-4">
          {{(order.delivery.price + getItemsPrice(order)).toFixed(2)}}€
        </td>
        <td class="px-6 py-4 text-right">
          <router-link :to="'/account/orders/' + order.id" class="font-medium text-indigo-500 hover:underline">Open</router-link>
        </td>
      </tr>
      </tbody>
    </table>
    <Modal>

    </Modal>
  </div>
  <div class="flex flex-col space-y-5 mt-5 lg:mt-0" v-else>
    <StaticNotification class="bg-indigo-500" :allowClose="false">No orders to display</StaticNotification>
    <router-link class="text-indigo-600 font-semibold justify-center flex" to="/">
      Explore market
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
    }
  },
  async mounted() {
    try {
      const res = await this.$axios.get('/orders/me/all')
      console.log(res)
      if (res && res.status === 200 && res.data) {
        this.orders = res.data
        for (let i in this.orders) {
          for (let k in this.orders[i].items) {
            try {
              const res = await this.$axios.get('/colors/' + this.orders[i].items[k].colorId)
              if (res && res.status === 200) {
                this.orders[i].items[k].colorId = res.data
              }
            }catch (e) {
              console.log(e)
            }
          }
        }
      }
    }catch (e) {
      console.log(e)
    }
  },
  computed: {
    getOrders() {
      return this.orders
    }
  },
  methods: {
    async create() {
      await this.$axios.post('/orders/create', {
        deliveryId: 1,
        items: [
          {
            colorId: 1,
            itemId: 1,
            quantity: 2,
          }
        ]
      })
    },
    getItemsPrice(order) {
      let price = 0
      for (let i in order.items) {
        price += ((order.items[i].price + order.items[i].colorId.price) * order.items[i].quantity)
      }
      return price
    },
    formatDate(value) {
      const date = new Date(value)
      return (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + '.'
        + (date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()) + '.'
        + date.getFullYear() + ' '
        + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":"
        + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":"
        + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds())
    }
  }
}
</script>
