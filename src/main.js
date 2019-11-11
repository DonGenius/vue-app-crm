import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from './filters/currency.filter'
import localizeFilter from './filters/localize.filter'
import titlePlugin from './utils/title.plugin'
import tooltipDirective from  './directives/tooltip.directive'
import messagePlugin from './utils/message.plugin'
import Loader from './components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false


Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('paginate', Paginate)

firebase.initializeApp({
  apiKey: "AIzaSyCDwM40WZYNzH4A8wepr41OydpYeNbQe1o",
  authDomain: "vue-app-crm.firebaseapp.com",
  databaseURL: "https://vue-app-crm.firebaseio.com",
  projectId: "vue-app-crm",
  storageBucket: "vue-app-crm.appspot.com",
  messagingSenderId: "383809907838",
  appId: "1:383809907838:web:e121f9bfd89c58293afc2f",
  measurementId: "G-LBS5HBZ5PE"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


