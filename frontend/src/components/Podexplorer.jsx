import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Podexplorer extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to Podexplorer!</h2>
        <hr />

        <h3>Podcasts</h3>
        <table>
          <tbody>
            {this.props.podcasts.map(podcasts => (
              <tr>
                <td>{podcast.title}</td>
                <td>{podcast.description}</td>
                {/* <td><button>edit</button></td> */}
                {/* <td><button>delete</button></td> */}
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
    notes: state.podcasts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Podexplorer);
