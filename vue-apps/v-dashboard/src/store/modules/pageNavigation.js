const pageNavigation = {
  namespaced: true,

  state: () => ({
    currentPage: 'HomePage',
  }),
  mutations: {
    changePage(state, pageName) {
      state.currentPage = pageName;
    },
  },
  actions: {
    changePage({ commit }, pageName) {
      // CHANGE PAGE IN APP
      commit('changePage', pageName);
    },
  },
  getters: {}

};

export default pageNavigation;
