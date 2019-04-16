import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Podcasts extends Component {
  render() {
  return (
    <div>
    <h2>Welcome to Podcasts!</h2>
    <p>
      <Link to="/contact">Click Here</Link> to contact us!
    </p>
    </div>
  )
  }
}
