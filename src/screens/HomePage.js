import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ads from '../components/Ads';

class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      ads: [],
      loading: false,
      Opacity: 0
    };
  }

  componentWillMount(){
    this.setState({ loading: true });
    this.props.dispatch({type: "SHOW"});
    fetch('http://hardver-bazar.hu/backend/index.php?api=getnewestads')
    .then(response => { return response.json(); })
    .then(json => {
      this.setState({ads: json}, () => { this.setState({ loading: false, Opacity: 1 }, () => { this.props.dispatch({type: "HIDE"}) }) });
      //console.log(json)
    })
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
            key={index}
          />
        );
    })

    return (
      <div style={{ marginTop: 0, paddingTop: 0, }}>
        <p style={{borderBottom:'3px solid #2080df' }} className="lead">Legújabb hirdetések</p>
        <p style={{ display: this.state.loading ? 'block' : 'none' }}>töltés...</p>
        {ads}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  LoaderGIF: state.LoaderGIF
})

export default connect(mapStateToProps)(HomePage);
