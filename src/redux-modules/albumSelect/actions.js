// TODO TURCH CONST
export const dataIsLoading = bool => ({
  type: 'DATA_IS_LOADING',
  payload: bool,
});

export const fetchSuccess = result => ({
  type: 'FETCH_ALBUMS',
  payload: result,
});

export const fetchAlbums = () => async dispatch => {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/albums').then(response =>
      response.json()
    );

    dispatch(fetchSuccess(result));
  } catch (err) {
    console.error(err);
  } finally {
    dispatch(dataIsLoading(false));
  }
};
