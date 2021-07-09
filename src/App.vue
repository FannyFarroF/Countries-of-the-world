<template>
  <div></div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->

  <router-view />
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: rgb(246, 247, 251);
    min-height: 100vh;
  }
  a {
    text-decoration: none !important;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .VuePagination {
    display: flex;
    justify-content: center;
  }
  .VuePagination__pagination-item-prev-chunk,
  .VuePagination__pagination-item-next-chunk {
    display: none;
  }
  @media only screen and (max-width: 640px) {
    .container {
      width: 90% !important;
    }
  }
</style>
