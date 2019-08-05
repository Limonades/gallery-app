// TODO TURCH CONST and global
export const dataIsLoading = bool => ({
  type: 'DATA_PHOTOS_IS_LOADING',
  payload: bool,
});

export const photosSuccess = result => ({
  type: 'FETCH_PHOTOS',
  payload: result,
});

export const fetchPhotos = (id = 1) => async dispatch => {
  console.log(id);
  dispatch(dataIsLoading(true));

  try {
    const result = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`).then(
      response => response.json()
    );

    console.log(result);

    dispatch(photosSuccess(result));
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(dataIsLoading(false));
  }
};
