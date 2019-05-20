const initialState = [];

export default function podcasts(state=initialState, action) {
  let podcastList = state.slice();

  switch (action.type) {

    // Return new state with new podcast
    case 'ADD_PODCAST':
      return [...state, action.podcast];

    // Delete selected podcast
    case 'DELETE_PODCAST':
      podcastList.splice(action.id, 1);
      return podcastList;

    // Fetch all user podcasts
    case 'FETCH_PODCASTS':
    return [...state, ...action.podcasts];

    default:
      return state;
  }
}
