import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles = {
  transition: 'all 0.3s ease-out'
}

class HomePage extends Component {

  render() {
    window.scrollTo(0, 0)
    return (
      <div style={{ marginTop: 0, paddingTop: 0, }}>
        <p style={{borderBottom:'3px solid #2080df' }} className="lead">Legújabb hirdetések</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  LoaderGIF: state.LoaderGIF
})

export default connect(mapStateToProps)(HomePage);
