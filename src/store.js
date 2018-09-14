import Vue from 'vue'
import Vuex from 'vuex'
import donatur from './modules/donatur'
import clients from './modules/clients'
import transaksi from './modules/transaksi'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false
    },
    modules: {
        donatur,
        clients,
        transaksi
    }
})