import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles = {
  transition: 'all 0.3s ease-out'
}

class HomePage extends Component {

  render() {
    window.scrollTo(0, 0)
    return (
      <div>
        <h1>HomePage</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at rutrum elit. Nulla a egestas diam. Nunc tristique leo ac quam iaculis condimentum. Phasellus eleifend quam at ipsum maximus, quis malesuada libero egestas. Fusce pulvinar auctor lacus. Ut tincidunt sodales neque nec suscipit. Duis id ornare erat. Maecenas ullamcorper est eu lorem luctus, a dapibus eros bibendum. Proin ut gravida est. Etiam a risus sed dui lacinia cursus. Donec eu maximus est.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  LoaderGIF: state.LoaderGIF
})

export default connect(mapStateToProps)(HomePage);
