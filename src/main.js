import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Pagination from 'v-pagination-3';

library.add(fas)
library.add(fab)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).component('pagination', Pagination).mount('#app')