<template>
  <div class="home">
    <HeaderComponent
      v-on:tipoDatos="buscarNombre($event)"
      v-bind:limpiar="limpiar"
    />
    <main class="main">
      <div class="container px-0">
        <div class="row rounded py-4">
          <div class="col-md-4 ">
            <div class="bg-white rounded p-3">
              <div class="bts text-start mb-3">
                <button
                  class="btn btn-white border border"
                  @click="limpiarForm()"
                >
                  <font-awesome-icon :icon="['fas', 'broom']" />

                  Limpiar
                </button>
              </div>
              <div class="text-start">
                <h3 class="title-row">Filtrar</h3>
              </div>
              <div class="d-flex flex-column w-100 mt-3" style="border:0">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  @change="obtenerContinente()"
                  v-model="region"
                >
                  <option value="" selected
                    >-- Seleccione un continente --</option
                  >
                  <option value="africa">Africa</option>
                  <option value="asia">Asia</option>
                  <option value="americas">América</option>
                  <option value="europe">Europa</option>
                  <option value="oceania">Oceanía</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="" v-show="mostrarSpinner == true">
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p>
                Cargando...
              </p>
            </div>
            <ul v-show="mostrarSpinner == false">
              <li
                v-for="(item, index) in datosPaginados"
                :key="index"
                class="bg-white item d-flex align-items-center p-2 rounded  position-relative"
              >
                <router-link :to="'/ver/' + item.alpha3Code">
                  <figure class="m-0">
                    <img :src="item.flag" alt="Bandera" class="w-100" />
                  </figure>
                </router-link>
                <div class="wrapper px-3 w-100">
                  <div class="description_item text-start">
                    <h2 class="title-item m-0">
                      {{ item.name }}
                    </h2>
                    <p class="m-0">Capital: {{ item.capital }}</p>
                  </div>
                  <div class="wrapper-footer d-flex justify-content-between">
                    <div class="continent border border-dark px-2 rounded">
                      <p class="m-0">{{ item.region }}</p>
                    </div>
                    <div class="extras d-flex align-items-center">
                      <p class="m-0">
                        <span class="mr-2">
                          <font-awesome-icon :icon="['fas', 'globe']" />
                        </span>
                        {{ item.languages[0].nativeName }}
                      </p>
                      <p class="mb-0 px-2">
                        <span class="mr-2">
                          <font-awesome-icon :icon="['fas', 'coins']" />
                        </span>
                        {{ item.currencies[0].name }}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <pagination
                v-model="page"
                :records="datos.length"
                :per-page="porpage"
                @paginate="myCallback"
              />
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from "axios";

  // @ is an alias to /src
  import HeaderComponent from "@/components/HeaderComponent.vue";

  export default {
    name: "Home",
    components: {
      HeaderComponent,
    },
    mounted() {
      this.obtenerDatos();
    },
    data() {
      return {
        page: 1,
        porpage: 10,
        totalCurrent: 0,
        datos: [],
        datosPaginados: [],
        mostrarSpinner: true,
        fFormulario: {
          campo: "",
          continente: "",
        },
        limpiar: false,
        region: "",
      };
    },
    methods: {
      obtenerContinente() {
        axios
          .get(`https://restcountries.eu/rest/v2/region/${this.region}`)
          .then((response) => {
            let data = response.data;
            this.datos = data;
            this.cargarPaginate(1);
          })
          .catch(function(error) {
            console.error(error);
          });
      },
      buscarNombre(nuevosRegistros) {
        this.datos = nuevosRegistros;
        this.cargarPaginate(1);
      },
      obtenerDatos() {
        const options = {
          method: "GET",
          url: "https://restcountries.eu/rest/v2/all",
        };

        axios
          .request(options)
          .then((response) => {
            let data = response.data;
            this.mostrarSpinner = false;
            this.datos = data;
            this.cargarPaginate(1);
          })
          .catch(function(error) {
            console.error(error);
          });
      },
      limpiarForm() {
        this.fFormulario.campo = "";
        this.region = "";
        this.obtenerDatos();
        this.limpiar = true;
      },
      myCallback(currentPage) {
        this.cargarPaginate(currentPage);
      },
      cargarPaginate(currentPage) {
        let inicio = currentPage * this.porpage - this.porpage;
        let fin = currentPage * this.porpage;
        this.datosPaginados = this.datos.slice(inicio, fin);
      },
    },
  };
</script>
<style lang="scss" scoped>
  .search {
    background: #fff;
    input {
      outline: none !important;
      box-shadow: none !important;
      border: 0;
    }
    &:focus {
      outline: none !important;
    }
  }
  .item {
    height: 110px;
    margin-bottom: 20px;
  }
  figure {
    width: 100px;
  }
  .continent {
    width: 100px;
    font-weight: 500;
    font-size: 0.8rem;
    margin-top: 5px;
  }
  .title-item {
    font-weight: bold;
    font-size: 1.2rem;
  }
  .description_item p {
    font-size: 0.9rem;
  }
  .extras {
    color: #8c8c8c;
    font-size: 0.87rem;
  }
  .title-row {
    text-transform: uppercase;
    font-size: 1.1rem;
  }
  @media only screen and (max-width: 640px) {
  }
</style>
