const initialState = {
  result: null,
  isLoading: true,
};

export const selectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALBUMS':
      return { ...state, result: action.payload };
    case 'DATA_IS_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
