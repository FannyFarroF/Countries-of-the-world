<template>
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
    .main ul {
      padding: 0;
    }
    .wrapper-footer {
      flex-direction: column;
    }
    .pagination {
      flex-wrap: wrap !important;
      align-items: center !important;
      justify-content: center !important;
    }
    .main .item {
      height: 120px !important;
    }
    .extras {
      flex-direction: column;
      justify-content: start;
      margin: 5px 0;
      p {
        width: 100%;
        text-align: start;
        padding: 0 !important;
      }
    }
  }
</style>
