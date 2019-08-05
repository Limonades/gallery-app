import * as React from 'react';
import { connect } from 'react-redux';
import { AlbumSelect, PhotosSearch } from '../index';
import { fetchAlbums } from '../../redux-modules/albumSelect/actions';
import { fetchPhotos } from '../../redux-modules/photosData/actions';
import './index.scss';

class RequestPanel extends React.Component {
  componentWillMount() {
    const { fetchDataAlbums } = this.props;

    fetchDataAlbums();
  }

  render() {
    const { albums, isLoading, fetchDataPhotos } = this.props;

    return (
      <div className="request-panel container">
        <AlbumSelect albums={albums} loader={isLoading} fetchDataPhotos={fetchDataPhotos} />
        <PhotosSearch />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.selectReducer.result,
  isLoading: state.selectReducer.isLoading,
  photos: state.photoReducer.result,
  isPhotosLoading: state.photoReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchDataAlbums: () => {
    dispatch(fetchAlbums());
  },

  fetchDataPhotos: id => {
    dispatch(fetchPhotos(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestPanel);
