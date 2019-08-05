import * as React from 'react';

class AlbumSelect extends React.Component {
  handleChange = e => {
    const { fetchDataPhotos } = this.props;
    console.log(e.target.value);

    fetchDataPhotos(e.target.value);
  };

  render() {
    const { albums, loader } = this.props;

    return (
      <div>
        <h1>Albums</h1>
        <select onChange={this.handleChange}>
          <option>Albums</option>
          {albums ? (
            albums.map(el => (
              <option value={el.id} key={el.id}>
                ${el.title}
              </option>
            ))
          ) : (
            <option>Soething went wrong</option>
          )}
        </select>

        {loader ? <span style={{ color: 'white', display: 'block' }}>Loading...</span> : null}
      </div>
    );
  }
}

export default AlbumSelect;
