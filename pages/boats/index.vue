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
        {name: "Buster", url: "/1.png", link: "/boats/buster"},
        {name: "Alutroll", url: "/2.png", link: "/boats/alutroll"},
        {name: "Linder", url: "/3.png", link: "/boats/linder"},
        {name: "Silver", url: "/4.png", link: "/boats/silver"},
        {name: "Suvi", url: "/5.png", link: "/boats/suvi"},
        {name: "Terhi", url: "/6.png", link: "/boats/terhi"},
        {name: "Rönnqvist", url: "/7.png", link: "/boats/ronnqvist"},
        {name: "Faster", url: "/8.png", link: "/boats/faster"},
        {name: "Yamarin", url: "/9.png", link: "/boats/yamarin"},
        {name: "Boston", url: "/10.png", link: "/boats/boston"},
        {name: "Yki", url: "/11.png", link: "/boats/yki"},
      ]
    }
  }
}
</script>

<style scoped>
  .boats-container {
    margin-top: 20px;
    margin-bottom: 20px;
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
