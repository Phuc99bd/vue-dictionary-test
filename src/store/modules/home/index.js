export default {
  namespaced: true,
  state: {
    keyword: '',
  },

  mutations: {
    SET_ATOKEN_EXP_DATE(state, keyword) {
      state.keyword = keyword;
    },
  },
};
