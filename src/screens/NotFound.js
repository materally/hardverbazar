import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotFound extends Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <div style={{ marginTop: 0, paddingTop: 0, }}>
        <p style={{borderBottom:'3px solid #2080df' }} className="lead">Az oldal nem található!</p>
        <p>Az oldal nem található!</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  LoaderGIF: state.LoaderGIF
})

export default connect(mapStateToProps)(NotFound);
