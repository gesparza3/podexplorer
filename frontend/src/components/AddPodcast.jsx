import React, { Component } from 'react';
import {connect} from 'react-redux';

// import {podcasts, auth} from "../actions";
import {podcasts} from "../actions";
import Podexplorer from "./Podexplorer";

class AddPodcast extends Component {
  // Set inital state values to empty
  state = {
    title: "",
    category: "",
    description: ""
  }

  // Submit user values to API and reset to empty
  submitPodcast = (e) => {
    e.preventDefault();
    this.props.addPodcast(this.state.title, this.state.category, this.state.description);
    this.setState({title: "", category: "", description: ""});
  }

  render() {
    return (
      <div>
        <Podexplorer />
        <h3>Add new podcast</h3>
        <form onSubmit={this.submitPodcast}>
          <p><input type="text"
              value={this.state.title}
              placeholder="Enter podcast..."
              onChange={(e) => this.setState({title: e.target.value})}
              required /></p>
          <p><textarea
                value={this.state.category}
                placeholder="Enter category..."
                onChange={(e) => this.setState({category: e.target.value})}
                required></textarea></p>
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
    addPodcast: (title, category, description) => {
      return dispatch(podcasts.addPodcast(title, category, description));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPodcast);
