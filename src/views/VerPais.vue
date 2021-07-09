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
    <div class="details py-4">
      <div class="container p-0">
        <div class="back d-flex jusitfy-content-start">
          <router-link to="/" class="redireccionar btn btn-white border border">
            <span class="mr-2">
              <font-awesome-icon :icon="['fas', 'home']"
            /></span>

            Inicio</router-link
          >
        </div>
        <div class="" v-show="mostrarSpinner === true">
          <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <p>
            Cargando...
          </p>
        </div>
        <div class="row mt-4" v-show="mostrarSpinner == false">
          <div class="col-md-6">
            <figure>
              <img :src="data.flag" alt="" class="w-100" />
            </figure>
          </div>
          <div class="col-md-6">
            <div class="row">
              <h2 class="text-start subtitle">{{ data.name }}</h2>
              <div class="description">
                <ul class="list-group">
                  <li class="list-group-item text-start">
                    <b> Nombre oficial: </b> {{ data.nombreOficial }}
                  </li>
                  <li class="list-group-item text-start">
                    <b> Lengua nativa: </b> {{ data.lenguage }}
                  </li>
                  <li class="list-group-item text-start">
                    <span class="fw-bold">Población:</span>
                    {{ data.population }}
                  </li>
                  <li class="list-group-item text-start">
                    <span class="fw-bold">Región:</span> {{ data.region }}
                  </li>
                  <li class="list-group-item text-start">
                    <span class="fw-bold">Sub región:</span>
                    {{ data.subregion }}
                  </li>
                  <li class="list-group-item text-start">
                    <span class="fw-bold">Capital:</span> {{ data.capital }}
                  </li>
                  <li class="list-group-item text-start">
                    <span class="fw-bold">Código telefónico:</span>
                    {{ data.callingCodes }}
                  </li>
                  <li class="list-group-item text-start">
                    <span class="fw-bold">Denominación:</span>
                    {{ data.demonym }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        mostrarSpinner: true,
        data: {
          lenguage: "",
          population: "",
          region: "",
          subregion: "",
          capital: "",
          callingCodes: "",
          demonym: "",
          nombreOficial: "",
        },
        borders: [],
        base: [],
        fullNameBorder: [],
      };
    },
    mounted() {
      this.cargarDatos();
    },
    methods: {
      cargarDatos() {
        const name = location.pathname.replace("/ver/", "");

        axios
          .get(`https://restcountries.eu/rest/v2/alpha/${name}`)
          .then((response) => {
            this.mostrarSpinner = false;
            let datos = response.data;
            this.data = datos;
            this.data.callingCodes = datos.callingCodes[0];
            this.data.lenguage = datos.languages[0].nativeName;
            this.data.nombreOficial = datos.altSpellings[2];
            this.borders = datos.borders;
          })
          .catch(function(error) {
            console.error(error);
          });
      },
    },
  };
</script>
<style scoped>
  .subtitle {
    font-size: 1.3rem;
    font-weight: bold;
  }
  .content-spinner {
    height: 60vh;
  }
</style>
