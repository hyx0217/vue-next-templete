export interface CountState {
  count: number;
}

export const CountModule = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment: (state: any) => {
      state.count++;
    },
    decrement: (state: any) => {
      state.count--;
    }
  },
  actions: {
    Increment: ({ commit }: any) => {
      commit('increment');
    },
    Decrement: ({ commit }: any) => {
      commit('decrement');
    }
  }
};
