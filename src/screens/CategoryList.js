import React, { Component } from 'react';
import { connect } from 'react-redux';

class CategoryList extends Component {

  componentDidMount() {

  }

  render() {
    window.scrollTo(0, 0)
    //subCatName: {this.props.location.state.subCatName}
    //subCatSlugName: {this.props.match.params.subCatSlugName}
    //subCatID: {this.props.match.params.subCatID}
    return (
      <div style={{ marginTop: 0, paddingTop: 0, }}>
        <p style={{borderBottom:'3px solid #2080df' }} className="lead">{this.props.location.state.subCatMainName} - {this.props.location.state.subCatName}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  LoaderGIF: state.LoaderGIF
})

export default connect(mapStateToProps)(CategoryList);
