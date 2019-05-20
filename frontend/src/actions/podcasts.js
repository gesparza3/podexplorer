export const fetchPodcasts = () => {
  return (dispatch, getState) => {
    let headers = {"Content-Type": "application/json"};
    // Retrieve user token from redux store
    let {token} = getState().auth;

    // Set valid token header
    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

    // Request all user podcasts
    return fetch("http://174.129.175.237:8000/api/podcasts/", {headers, })
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return {status: res.status, data};
          })
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
	  // Return all user podcasts
          return dispatch({type: 'FETCH_PODCASTS', podcasts: res.data});
        } else if (res.status === 401 || res.status === 403) {
	  // Report auth error
          dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
          throw res.data;
        }
      })
  }
}

export const addPodcast = (title, category, description) => {
  return (dispatch, getState) => {
    let headers = {"Content-Type": "application/json"};
    // Retrieve user token from redux store
    let {token} = getState().auth;

    // Set user token to header
    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

    let add_body = JSON.stringify({title, category, description });
    // Submit new podcast
    return fetch("http://174.129.175.237:8000/api/podcasts/", {headers, method: "POST", body: add_body})
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return {status: res.status, data};
          })
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 201) {
	  // Report successful submisson
          return dispatch({type: 'ADD_PODCAST', podcast: res.data});
        } else if (res.status === 401 || res.status === 403) {
	  // Report auth error
          dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
          throw res.data;
        }
      })
  }
}

export const deletePodcast = index => {
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    // Retrieve user token from redux store
    let {token} = getState().auth;

    // Set user token to header
    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

    let podcastId = getState().podcasts[index].id;

    // Make request to delete podcast
    return fetch(`http://174.129.175.237:8000/api/podcasts/${podcastId}/`, {headers, method: "DELETE"})
      .then(res => {
        if (res.status === 204) {
          return {status: res.status, data: {}};
        } else if (res.status < 500) {
          return res.json().then(data => {
            return {status: res.status, data};
          })
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 204) {
          // Report successful deletion
          return dispatch({type: 'DELETE_PODCAST', index});
        } else if (res.status === 401 || res.status === 403) {
	  // Report auth error
          dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
          throw res.data;
        }
      })
  }
}
