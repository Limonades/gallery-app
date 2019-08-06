import * as React from 'react';
import { connect } from 'react-redux';
import './index.scss';

class ResultPanel extends React.Component {
  render() {
    const {
      photos,
      isLoading,
      searchPhotos,
      isSearchPhotosLoading,
      searchPhotosNotFound,
    } = this.props;
    return (
      <div className="container result-panel__container">
        {isLoading ? <div className="loader" /> : null}
        {isSearchPhotosLoading ? <div className="loader" /> : null}
        {photos.length && !searchPhotos.length && !searchPhotosNotFound
          ? photos.map(el => (
              <div className="result-panel__card" key={el.id}>
                <picture>
                  <img src={el.thumbnailUrl} alt={el.title} />
                </picture>
                <p>{el.title}</p>
              </div>
            ))
          : null}
        {searchPhotos.length && !searchPhotosNotFound
          ? searchPhotos.map(el => (
              <div className="result-panel__card" key={el.id}>
                <picture>
                  <img src={el.thumbnailUrl} alt={el.title} />
                </picture>
                <p>{el.title}</p>
              </div>
            ))
          : null}
        {searchPhotosNotFound ? <div>Not found...</div> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photoReducer.result,
  isLoading: state.photoReducer.isLoading,
  searchPhotos: state.photosSearchReducer.result,
  searchPhotosNotFound: state.photosSearchReducer.notFound,
  isSearchPhotosLoading: state.photosSearchReducer.isLoading,
});

export default connect(
  mapStateToProps,
  null
)(ResultPanel);
