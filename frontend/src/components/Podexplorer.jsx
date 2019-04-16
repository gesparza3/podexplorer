import React, { Component } from 'react';
import {connect} from 'react-redux';

import {podcasts} from "../actions";



class Podexplorer extends Component {
  state = {
    title: "",
    description: ""
  }

  submitPodcast = (e) => {
    e.preventDefault();
    this.props.addPodcast(this.state.title, this.state.description);
    this.setState({title: "", description: ""});
  }

	componentDidMount() {
    // this.props.fetchPodcasts();
  }

  render() {
    return (
      <div>
        <h2>Welcome to Podexplorer!</h2>
        <hr />

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

        <h3>Podcasts</h3>
        <table>
          <thead>
            <th>Title</th>
            <th>Description</th>
            <th></th>
          </thead>
          <tbody>
            {this.props.podcasts.map((podcast, id) => (
            <tr key={`podcast_${id}`}>
              <td>{podcast.title}</td>
              <td>{podcast.description}</td>
              {/* <td><button onClick={() => this.props.deletePodcast(id)}>delete</button></td> */}
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPodcasts: () => {
      dispatch(podcasts.fetchPodcasts());
    },
    addNote: (title, description) => {
      return dispatch(podcasts.addPodcast(title, description));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Podexplorer);
