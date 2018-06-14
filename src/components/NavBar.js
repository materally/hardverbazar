import React, {Component} from 'react';
import {
    Link
  } from 'react-router-dom';
import { connect } from 'react-redux';
import LoaderGIF from '../img/ajax-loader.gif';

class NavBar extends Component {

  render(){
  return (

    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

                <Link to="/" className="navbar-brand" style={{ position: 'relative' }}>
                    <img src="http://hardver-bazar.hu/images/header.png" alt="" style={{  }}/>
                    <div className="LoaderGIF">
                        <img src={LoaderGIF} alt="" style={{ opacity: this.props.LoaderGIF }} />
                    </div>
                </Link>

            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/">Homepage</Link></li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">Apróhirdetés kezelés
                    <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><Link to="/products">Products</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                      <li><Link to="/company">Company</Link></li>
                    </ul>
                  </li>
                  <li style={{backgroundColor:'#1f9b33'}}><a href="new_ad.php" style={{ color: 'white' }}>Ingyenes hirdetésfeladás</a></li>
                </ul>
            </div>
        </div>
    </nav>


  )
}
};

const mapStateToProps = state => ({
    LoaderGIF: state.LoaderGIF
})

export default connect(mapStateToProps)(NavBar);
