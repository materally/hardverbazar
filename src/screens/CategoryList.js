import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ads from '../components/Ads';

class CategoryList extends Component {

  constructor(){
    super();
    this.state = {
      ads: [],
      loading: false,
      Opacity: 0
    }
  }

  componentWillMount(){
    this.setState({ loading: true });
    this.props.dispatch({type: "SHOW"});
    fetch(`http://hardver-bazar.hu/backend/index.php?api=getcategorylist&cat=${this.props.match.params.subCatID}&page=1&row_per_page=5`)
    .then(response => { return response.json(); })
    .then(json => {
      this.setState({ads: json.ads}, () => { this.setState({ loading: false, Opacity: 1 }, () => { this.props.dispatch({type: "HIDE"}) }) });
      //console.log(json)
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.subCatID !== this.props.match.params.subCatID){
      this.setState({ loading: true });
      this.props.dispatch({type: "SHOW"});
      fetch(`http://hardver-bazar.hu/backend/index.php?api=getcategorylist&cat=${nextProps.match.params.subCatID}&page=1&row_per_page=5`)
      .then(response => { return response.json(); })
      .then(json => {
        this.setState({ads: json.ads}, () => { this.setState({ loading: false, Opacity: 1 }, () => { this.props.dispatch({type: "HIDE"}) }) });
        //console.log(json)
      })
    }
  }

  render() {
    window.scrollTo(0, 0)
    const ads = this.state.ads.map((item, index) => {
      return (
          <Ads 
            img_src={item.img_src} 
            product_name={item.name}
            desc={item.desc}
            nice_price={item.nice_price}
            region_full={item.region_full}
          />
      );
  })
    //subCatName: {this.props.location.state.subCatName}
    //subCatSlugName: {this.props.match.params.subCatSlugName}
    //subCatID: {this.props.match.params.subCatID}
    return (
      <div style={{ marginTop: 0, paddingTop: 0, }}>
        <p style={{borderBottom:'3px solid #2080df' }} className="lead">{this.props.location.state.subCatMainName} - {this.props.location.state.subCatName}</p>
        <p style={{ display: this.state.loading ? 'block' : 'none' }}>töltés...</p>
        {ads}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  LoaderGIF: state.LoaderGIF
})

export default connect(mapStateToProps)(CategoryList);
