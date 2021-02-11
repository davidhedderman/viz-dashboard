import Vue from 'vue';
import Vuex from 'vuex';

import pageNavigation from './modules/pageNavigation';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pageNavigation,
  },
});
