<template>
  <div>
    <header class="bg-white border border-bottom">
      <div class="container p-0">
        <div class="py-3">
          <h2 class="text-start px-0 title-section">
            <b> Países</b> del mundo
          </h2>
        </div>
      </div>
    </header>
    <section class="banner">
      <div class="p-0">
        <figure
          class="banner-header m-0 px-0  overflow-hidden position-relative"
        >
          <img
            alt="Portada"
            src="../assets/images/portada-01.jpg"
            class="w-100 h-100 img-fluid"
          />
          <div
            class="form-search w-100 position-absolute d-flex align-items-center "
          >
            <div
              class="d-flex w-75 justify-content-center align-items-center mx-auto search rounded"
            >
              <span class="mr-2 px-2">
                <font-awesome-icon :icon="['fas', 'globe']" />
              </span>
              <input
                type="text"
                class="form-control"
                id=""
                placeholder="Buscar por nombre"
                v-model="fFormulario.nombre"
                @focusout="buscarNombre()"
                @keyup.enter="buscarNombre()"
              />
              <button class="btn btn-primary px-4">
                Buscar
              </button>
            </div>
          </div>
        </figure>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "HeaderComponent",
    created() {},
    data() {
      return {
        resul: {},
        fFormulario: {
          nombre: "",
        },
      };
    },
    props: ["limpiar"],
    watch: {
      limpiar(value) {
        if (value === true) {
          this.fFormulario.nombre = "";
        }
      },
    },
    methods: {
      buscarNombre() {
        axios
          .get(
            `https://restcountries.eu/rest/v2/name/${this.fFormulario.nombre}`
          )
          .then((response) => {
            let dataaa = response.data;
            this.$emit("tipoDatos", dataaa);
          })
          .catch(function(error) {
            console.error(error);
          });
      },
    },
  };
</script>

<style lang="scss">
  .title-section {
    font-size: 1.5rem;
  }
  .banner-header {
    height: 250px;

    img {
      object-fit: cover;
      object-position: center;
    }
    .form-search {
      z-index: 99999;
      top: 42%;
    }
  }
  .search {
    background: #fff;
    padding: 8px 5px;
    input {
      outline: none !important;
      box-shadow: none !important;
      border: 0;
    }
    &:focus {
      outline: none !important;
    }
  }
</style>
