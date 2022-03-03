<template>
  <div class="container boats-container">
    <h1 class="title">Boat marks</h1>
    <div class="boats-list">
      <router-link :to="boat.link" v-for="boat in boats" :key="boat.name">
        <BoatCard :name="boat.name" :url="boat.url" />
      </router-link>
    </div>
  </div>
</template>

<script>
import BoatCard from "@/components/BoatCard";

export default {
  components: {
    BoatCard,
  },
  data(){
    return {
      boats: [
        {name: "Buster", url: "/1.png", link: "/boats/buster", id: "GF4444"},
        {name: "Alutroll", url: "/2.png", link: "/boats/alutroll", id: "GF4444"},
        {name: "Linder", url: "/3.png", link: "/boats/linder", id: "GF4444"},
        {name: "Silver", url: "/4.png", link: "/boats/silver", id: "GF4444"},
        {name: "Suvi", url: "/5.png", link: "/boats/suvi", id: "GF4444"},
        {name: "Terhi", url: "/6.png", link: "/boats/terhi", id: "GF4444"},
        {name: "Rönnqvist", url: "/7.png", link: "/boats/ronnqvist", id: "GF4444"},
        {name: "Faster", url: "/8.png", link: "/boats/faster", id: "GF4444"},
        {name: "Yamarin", url: "/9.png", link: "/boats/yamarin", id: "GF4444"},
        {name: "Boston", url: "/10.png", link: "/boats/boston", id: "GF4444"},
        {name: "Yki", url: "/11.png", link: "/boats/yki", id: "GF4444"},
      ]
    }
  }
}
</script>

<style scoped>
  .boats-container {
    margin-top: 20px;
  }
  .title {
    font-weight: 300;
    color: #0000c6;
    text-align: center;

    margin-bottom: 20px;
  }
  .boats-list {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    justify-content: space-between;
    grid-row-gap: 20px;
    grid-column-gap: 10px;
  }
</style>
