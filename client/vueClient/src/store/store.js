'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

    strict: true,

    state: {
        component: 'dashboard',
        boys: ['matt', 'dan', 'led', 'nobody', 'chad', 'joe', 'vince', 'oscar', 'sphiwe', 'liser', 'uel']
    },

    mutations: {
        changeComponent: function (state, view) {
            state.component = view
        }
    },


    actions: {
        changeComponent: (context, view) => {
            context.commit('changeComponent', view)
        }
    }

})

