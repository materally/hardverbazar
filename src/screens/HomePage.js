import React, { Component } from 'react';
import { connect } from 'react-redux';


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

          <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
              <div className="thmb_image" style={{ backgroundImage: `url('${item.img_src}')` }}></div>
              <div className="caption">
                <h4 className="product_name"><a href="">{item.name}</a></h4>
                <p className="product_desc">{item.desc}</p>
              </div>
              <div className="ratings">
                <p className="pull-right"><strong>{item.price}</strong></p>
                <p>{item.region}</p>
              </div>
            </div>
          </div>
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
