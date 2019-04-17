import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';

import {podcasts, auth} from "../actions";

import AddPodcast from "./AddPodcast";



class Library extends Component {
	componentDidMount() {
    this.props.fetchPodcasts();
  }

  render() {
    return (
      <div>
        <h3>Library</h3>
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
