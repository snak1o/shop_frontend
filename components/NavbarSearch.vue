<template>
  <div class="search-container">
    <input class="search-input" type="text" placeholder="Search" />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .search-container {
    position: relative;
    width: 100%;
    transition: 0.3s ease;
  }
  .search-input {
    width: calc(100% - 32px);
    height: 40px;
    border: 1px solid lightgrey;
    outline: none;
    padding-left: 28px;
    font-size: 14px;
  }
  .search-container::after {
    content: "";
    position: absolute;
    background: url("../assets/images/search.svg");
    width: 20px;
    height: 20px;
    left: 5px;
    display: inline-block;
  }
</style>
