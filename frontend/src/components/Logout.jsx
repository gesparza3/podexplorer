import React, {Component} from "react";
import {connect} from "react-redux";
import {auth} from "../actions";


class Logout extends Component {

  render() {
    return (
      <div>
        <h3>Are you sure?</h3>
          <div style={{textAlign: "center"}}>
            {this.props.user.username} (<a onClick={this.props.logout}>logout</a>)
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(auth.logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
