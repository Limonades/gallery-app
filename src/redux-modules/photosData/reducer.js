const initialState = {
  result: [],
  isLoading: false,
};

export const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHOTOS':
      return { ...state, result: action.payload };
    case 'DATA_PHOTOS_IS_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};