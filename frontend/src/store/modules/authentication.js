import { API, ENDPOINTS } from "../../services/api";

const state = () => ({
  user: null,
  isAuthenticated: false,
  error: null,
});

const getters = {
  user: (state) => state.user,
  isAuthenticated: (state) => state.isAuthenticated,
};

const actions = {
  async login({ commit }, username) {
    try {
      const response = await API.post(`${ENDPOINTS.login}/${username}`, {}, { headers: { token: username } });

      if (response.data) {
        const user = response.data;
        commit("setUser", user);
        return user
      }
    } catch (err) {
      throw err.response?.data?.message || "Login failed. Please try again.";
    }
  },
  async logout({ commit }) {
    commit("resetUser");
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user;
    state.isAuthenticated = true;
  },
  resetUser(state) {
    state.user = null;
    state.isAuthenticated = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
