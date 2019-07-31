import * as React from 'react';
import { connect } from 'react-redux';
import AlbumSelect from './AlbumSelect';
import { fetchAlbums } from '../../redux-modules/albumSelect/actions';

class Container extends React.Component {
  componentWillMount() {
    const { fetchData } = this.props;

    fetchData();
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('render');

    const { albums, isLoading } = this.props;

    return (
      <div className="request-panel">
        <AlbumSelect albums={albums} loader={isLoading} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.selectReducer.result,
  isLoading: state.selectReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(fetchAlbums());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
