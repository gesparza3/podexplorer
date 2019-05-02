import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {auth} from "../actions";
import { Container, Navbar, Nav } from 'react-bootstrap';


class Podexplorer extends Component {

    // componentDidMount() {
    //     this.props.fetchPodcasts();
    // }

    render() {
        return (
          <>
            <Container className="pb-5">
              <Navbar variant="dark">
                <Navbar.Brand href=''><h1>Podexplorer</h1></Navbar.Brand>
                <Nav className="mr-auto">
                  <Link class="nav-link" to="">Library</Link>
                  <Link class="nav-link" to="/add">Add Podcast</Link>
                  <Nav.Link href="http://localhost:8000/chat/">Chat</Nav.Link>
                  <Link class="nav-link" to="/logout">Logout</Link>
                </Nav>
              </Navbar>
            </Container>
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
