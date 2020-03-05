import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        shows: [],
        bands: [],
        venues: [],
        user: {},
        geolocation: {},
        city: null
    },
    getters: {
    },
    mutations: {
        updateShows(state, shows) {
        //before store it, sort them by time
            if (shows) {
                shows.sort(function(a,b){
                    return new Date(a.timestamp) - new Date(b.timestamp);
                });
            }
            state.shows = shows;
        },
        updateBands(state, bands) {
            state.bands = bands;
        },
        updateVenues(state, venues) {
            state.venues = venues;
        },
        updateGeolocation(state, geolocation) {
            state.geolocation = geolocation;
        },
        updateCity(state, city) {
            state.city = city;
        }
    },
    actions: {

    }
})