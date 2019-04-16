export const addPodcast = (title, description) => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({title, description, });
    return fetch("/api/podcasts/", {headers, method: "POST", body})
      .then(res => res.json())
      .then(podcast => {
        return dispatch({
          type: 'ADD_NOTE',
          podcast
        })
      })
  }
}

export const deletePodcast = id => {
  return {
    type: 'DELETE_PODCAST',
    id
  }
}

export const fetchPodcasts = () => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    return fetch("/api/podcasts/", {headers, })
      .then(res => res.json())
      .then(podcasts => {
        return dispatch({
          type: 'FETCH_NOTES',
          podcasts
        })
      })
  }
}
