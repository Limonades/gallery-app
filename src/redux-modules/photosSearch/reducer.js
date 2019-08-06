const initialState = {
  result: [],
  notFound: false,
  isLoading: false,
};

export const photosSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_PHOTOS_SUCCESS':
      return { ...state, result: action.payload };
    case 'SEARCH_PHOTOS_FAIL':
      return { ...state, notFound: action.payload };
    case 'SEARCH_PHOTOS_IS_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
