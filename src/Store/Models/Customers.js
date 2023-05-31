const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
  export const customers = {
    state: {
      listCustomer: data,
      count: data.length,
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      setListCustomer(state, listCustomer) {
        return {
            ...state,
            listCustomer,
          };
      },
      setCount(state, count) {
        return {
            ...state,
            count,
          };
      },
    },
    effects: (dispatch) => ({
      // handle state changes with impure functions.
      // use async/await for async actions
      // async incrementAsync(payload, rootState) {
      //   await new Promise((resolve) => setTimeout(resolve, 1000));
      //   dispatch.count.increment(payload);
      // },
    }),
    selectors: (slice, createSelector) => ({
      selectCount() {
        return slice(state => state.count);
      },
  }),
  };