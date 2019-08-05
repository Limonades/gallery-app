import * as React from 'react';
import { connect } from 'react-redux';
import './index.scss';

class ResultPanel extends React.Component {
  render() {
    const { photos, isLoading } = this.props;
    console.log(photos);
    return (
      <div className="container result-panel__container">
        {isLoading ? <div className="loader" /> : null}
        {photos
          ? photos.map(el => (
              <div className="result-panel__card">
                <picture>
                  <img src={el.thumbnailUrl} alt={el.title} />
                </picture>
                <p>{el.title}</p>
              </div>
            ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photoReducer.result,
  isLoading: state.photoReducer.isLoading,
});

export default connect(
  mapStateToProps,
  null
)(ResultPanel);
