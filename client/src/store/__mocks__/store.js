import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const getters = {
  isAuthenticated: jest.fn().mockReturnValue('abcde5'),
};

export const mutations = {
  authUser: jest.fn(),
  storeUser: jest.fn(),
  clearAuthData: jest.fn(),
};

export const actions = {
  fetchItems: jest.fn(),
};

export const state = {
  token: 'abcde5',
  id_user: 1,
  user: 'null',
  username: 'olivia'
};

// eslint-disable-next-line no-underscore-dangle
export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {} }) {
  const mockGetters = Object.assign({}, getters, custom.getters);
  const mockMutations = Object.assign({}, mutations, custom.mutations);
  const mockActions = Object.assign({}, actions, custom.actions);
  const mockState = Object.assign({}, state, custom.state);

  return {
    getters: mockGetters,
    mutations: mockMutations,
    actions: mockActions,
    state: mockState,
    store: new Vuex.Store({
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState,
    }),
  };
}

export const store = __createMocks().store;
