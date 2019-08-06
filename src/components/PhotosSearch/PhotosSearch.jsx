import * as React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { filterPhotos } from '../../redux-modules/photosSearch/actions';

class PhotosSearch extends React.Component {
  handleChange = e => {
    const { photos, photosFilter } = this.props;
    const { value } = e.target;

    if (value.length >= 3) {
      photosFilter(photos, value);

      return;
    }

    if (value.length < 3) {
      photosFilter([], null);
    }
  };

  render() {
    const { photos } = this.props;

    return (
      <div className="photos-search">
        <h1>Search</h1>
        <input
          type="text"
          placeholder={photos.length ? 'Search by title' : 'Select album to enable search'}
          disabled={!photos.length}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photoReducer.result,
});

const dispatchToProps = dispatch => ({
  photosFilter: (photos, value) => {
    dispatch(filterPhotos(photos, value));
  },
});

export default connect(
  mapStateToProps,
  dispatchToProps
)(PhotosSearch);
