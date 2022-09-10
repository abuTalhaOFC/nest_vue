import { createStore } from "vuex";

export const MENU_SIDEBAR_EXPEND = "MENU_SIDEBAR_EXPEND";

//state start___________________

export const state = () => {
  return {
    isMenuSidebarExpend: true,
  };
};

// state end ___________________________

// mutations start __________________

export const mutations = {
  [MENU_SIDEBAR_EXPEND](state) {
    state.isMenuSidebarExpend
      ? (state.isMenuSidebarExpend = false)
      : (state.isMenuSidebarExpend = true);
  },
};

// mutitions end____________

const store = createStore({
  state,
  mutations,

  strict: process.env.NODE_ENV !== "production",
});

export default store;
