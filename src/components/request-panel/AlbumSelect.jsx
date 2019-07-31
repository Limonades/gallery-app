import * as React from 'react';

class AlbumSelect extends React.Component {
  render() {
    const { albums, loader } = this.props;

    return (
      <div>
        <select name="" id="">
          {albums ? (
            albums.map(el => <option key={el.id}>${el.title}</option>)
          ) : (
            <option>Soething went wrong</option>
          )}
        </select>

        {loader ? <span style={{color: 'white', display: 'block'}}>Loading...</span> : null}
      </div>
    );
  }
}

export default AlbumSelect;
