import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {auth} from "../actions";
// import {podcasts, auth} from "../actions";


class Podexplorer extends Component {

    // componentDidMount() {
    //     this.props.fetchPodcasts();
    // }

    render() {
        return (
          <>
            <div class="text-center">
              <h2>Welcome to Podexplorer!</h2>
                <nav class="navbar navbar-expand-sm bg-dark justify-content-center">
                    <Link class="nav-item nav-link" to="add">Add Podcast</Link>
                    <Link class="nav-item nav-link" to="library">Library</Link>
                    <Link class="nav-item nav-link float-right"to="/logout">Logout</Link>
                </nav>
              <hr />
              <div class="row pt-5">
                <div class="col text-center">
                  <button type="button" class="btn btn-dark btn-lg"><Link to="add">Add Podcast</Link></button>
                </div>
                <div class="col text-center">
                  <button type="button" class="btn btn-dark btn-lg"><Link to="library">Library</Link></button>
                </div>

              </div>
            </div>
          </>
        )
    }
}


const mapStateToProps = state => {
    return {
        podcasts: state.podcasts,
        user: state.auth.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(auth.logout()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Podexplorer);
