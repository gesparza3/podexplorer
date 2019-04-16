const initialState = [];

export default function podcasts(state=initialState, action) {
  let podcastList = state.slice();

  switch (action.type) {

    case 'ADD_PODCAST':
      return [...state, action.podcast];

    case 'DELETE_PODCAST':
      podcastList.splice(action.id, 1);
      return podcastList;

    case 'FETCH_NOTES':
    return [...state, ...action.podcasts];

    default:
      return state;
  }
}
