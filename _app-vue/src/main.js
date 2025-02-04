import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import moment from 'moment';
import VueI18n from 'vue-i18n'
import Vue2TouchEvents from 'vue2-touch-events'
//General styles
import  "@/css/styles.scss"

Vue.config.productionTip = false;
let localeGlobal = 'es';
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: localeGlobal, // set locale
});


moment.locale('es');
Vue.prototype.$moment = moment;

Vue.use(Vue2TouchEvents);

//adds get week number to the date method
Date.prototype.getWeekNumber = function(){
  var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app');




