import React, { Component } from 'react';
import {connect} from 'react-redux';

import {podcasts, auth} from "../actions";
import Podexplorer from "./Podexplorer";


class Library extends Component {
	componentDidMount() {
    this.props.fetchPodcasts();
  }

  render() {
    return (
      <div>
        <Podexplorer />
        <h4>Library</h4>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.podcasts.map((podcast, id) => (
            <tr key={`podcast_${id}`}>
              <td>{podcast.title}</td>
              <td>{podcast.description}</td>
              <td><button onClick={() => this.props.deletePodcast(id)}>delete</button></td>
            </tr>
            ))}
          </tbody>
        </table>

      </div>
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
    fetchPodcasts: () => {
      dispatch(podcasts.fetchPodcasts());
    },
    addPodcast: (title, description) => {
      return dispatch(podcasts.addPodcast(title, description));
    },
    deletePodcast: (id) => {
      dispatch(podcasts.deletePodcast(id));
    },
    logout: () => dispatch(auth.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
