import React, { Component } from 'react';

class Ads extends Component {

  render() {
    return (
        <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
                <div className="thmb_image" style={{ backgroundImage: `url('${this.props.img_src}')` }}></div>
                <div className="caption">
                <h4 className="product_name"><a href="">{this.props.product_name}</a></h4>
                <p className="product_desc">{this.props.desc}</p>
            </div>
            <div className="ratings">
                <p className="pull-right"><strong>{this.props.nice_price}</strong></p>
            <p>{this.props.region_full}</p>
            </div>
        </div>
        </div>
    );
  }
}

export default Ads;
