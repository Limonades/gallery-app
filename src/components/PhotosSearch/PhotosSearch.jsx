import * as React from 'react';
import './index.scss';
import { connect } from 'react-redux';

class PhotosSearch extends React.Component {
  handleChange = e => {
    console.log(e.target.value);
  };

  render() {
    const { photos } = this.props;

    return (
      <div className="photos-search">
        <h1>Search</h1>
        <form>
          <input
            type="text"
            placeholder={photos.length ? 'Search by title' : 'Select album to enable search'}
            disabled={!photos.length}
            onChange={this.handleChange}
          />
          <button type="button" disabled={!photos.length}>
            search
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photoReducer.result,
});

export default connect(
  mapStateToProps,
  null
)(PhotosSearch);
