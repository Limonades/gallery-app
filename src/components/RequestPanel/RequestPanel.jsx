import * as React from 'react';
import { connect } from 'react-redux';
import { AlbumSelect } from '../index';
import { fetchAlbums } from '../../redux-modules/albumSelect/actions';
import { fetchPhotos } from '../../redux-modules/photosData/actions';

class RequestPanel extends React.Component {
  componentWillMount() {
    const { fetchDataAlbums } = this.props;

    fetchDataAlbums();
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('render');

    const { albums, isLoading, fetchDataPhotos } = this.props;

    return (
      <div className="request-panel">
        <AlbumSelect albums={albums} loader={isLoading} fetchDataPhotos={fetchDataPhotos} />
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

  fetchDataPhotos: () => {
    dispatch(fetchPhotos());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestPanel);
