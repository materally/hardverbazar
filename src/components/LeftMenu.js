import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';

const styles = {
  transition: 'all 0.3s ease-out'
}

class LeftMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      menus: [],
      loading: false,
      menuOpacity: 0
    };
  }

  componentWillMount(){
    this.setState({ loading: true });
    this.props.dispatch({type: "SHOW"});
    fetch('http://hardver-bazar.hu/backend/index.php?api=getcategories')
    .then(response => { return response.json(); })
    .then(json => {
      this.setState({menus: json}, () => { this.setState({ loading: false, menuOpacity: 1 }, () => { this.props.dispatch({type: "HIDE"}) }) });
      //console.log(json)
    })
  }

  render() {
    return (
      <div>
      <p style={{ display: this.state.loading ? 'block' : 'none' }}>töltés...</p>
      <div style={{ ...styles, opacity: this.state.menuOpacity }}>
        {
           this.state.menus.map((item_main, index_main) => {
            var subs = this.state.menus[index_main].subs.map((item_sub, index_sub) => {
              {/* return(<Link to={`/kategoria/${item_sub.sub_id}/${item_sub.sub_slug}`} key={item_sub.sub_id} className="list-group-item">{item_sub.sub_name}</Link>) */}
              return(<Link to={{ pathname: `/kategoria/${item_sub.sub_id}/${item_sub.sub_slug}`, state: { subCatName: item_sub.sub_name, subCatMainName: item_main.main_name } }} key={item_sub.sub_id} className="list-group-item">{item_sub.sub_name}</Link>)
            });
              return (
                <div key={item_main.main_name}>
                  <p key={item_main.main_slug}  style={{borderBottom:'3px solid #2080df' }} className="lead">{item_main.main_name}</p>
                    <div className="list-group">
                      {subs}
                    </div>
                </div>
              );
          })
        }
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  LoaderGIF: state.LoaderGIF
})

export default connect(mapStateToProps)(LeftMenu);
