// TODO TURCH CONST
export const photosSearchIsLoading = bool => ({
  type: 'SEARCH_PHOTOS_IS_LOADING',
  payload: bool,
});

export const searchSuccess = result => ({
  type: 'SEARCH_PHOTOS_SUCCESS',
  payload: result,
});

export const searchFail = bool => ({
  type: 'SEARCH_PHOTOS_FAIL',
  payload: bool,
});

export const filterPhotos = (photos, value) => async dispatch => {
  dispatch(photosSearchIsLoading(true));

  try {
    const result = await photos.filter(card => card.title.includes(value));

    if (value !== null && result.length === 0) {
      dispatch(searchFail(true));
    } else {
      dispatch(searchFail(false));
      dispatch(searchSuccess(result));
    }

    dispatch(searchSuccess(result));
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(photosSearchIsLoading(false));
  }
};
