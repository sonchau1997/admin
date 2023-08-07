const data = [
    {
        key: '1',
        name: 'Phòng 1',
        dayIn:'20/3/2023',
        csdm: 32,
        csdc:20,
        csnm:10,
        csnc:5,
        junk:20,
        total:1000
      
    }
    
];
export const motels = {
    state: {
      listmotel: data,
      count: data.length,
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      setListmotel(state, listmotel) {
        return {
            ...state,
            listmotel,
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