import React, { Component } from 'react';
import {connect} from 'react-redux';

import {podcasts, auth} from "../actions";

class AddPodcast extends Component {
  state = {
    title: "",
    description: ""
  }

  submitPodcast = (e) => {
    e.preventDefault();
    this.props.addPodcast(this.state.title, this.state.description);
    this.setState({title: "", description: ""});
  }

  render() {
    return (
      <div>
        <h3>Add new podcast</h3>
        <form onSubmit={this.submitPodcast}>
          <p><input type="text"
              value={this.state.title}
              placeholder="Enter podcast..."
              onChange={(e) => this.setState({title: e.target.value})}
              required /></p>
          <p><textarea
                value={this.state.description}
                placeholder="Enter description..."
                onChange={(e) => this.setState({description: e.target.value})}
                required></textarea></p>
            <p><input type="submit" value="Save Podcast"/></p>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    podcasts: state.podcasts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPodcast: (title, description) => {
      return dispatch(podcasts.addPodcast(title, description));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPodcast);
