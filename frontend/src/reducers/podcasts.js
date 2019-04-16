const initialState = [
  {
    title: "The Joe Rogan Experience",
    description: "The Joe Rogan Experience podcast"
  }
];

export default function podcasts(state=initialState, action) {
  let podcastList = state.slice();

  switch (action.type) {

    case 'ADD_PODCAST':
      return [...state, {title: action.title, description: action.description}];

    case 'DELETE_PODCAST':
      podcastList.splice(action.id, 1);
      return podcastList;

    default:
      return state;
  }
}
