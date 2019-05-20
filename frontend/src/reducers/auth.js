// Set intial state to empty values and retreive token
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: true,
  user: null,
  errors: {},
};

// Actions report new state changes to redux store, here the
// reducers modify the state based on report of actions 
export default function auth(state=initialState, action) {

  switch (action.type) {

    // Set state to reflect loading user
    case 'USER_LOADING':
      return {...state, isLoading: true};

    // On successful loaded user, report authentication
    case 'USER_LOADED':
      return {...state, isAuthenticated: true, isLoading: false, user: action.user};

    // Login was a success, save the new login token and report authentication
    case 'LOGIN_SUCCESSFUL':
      localStorage.setItem("token", action.data.token);
      return {...state, ...action.data, isAuthenticated: true, isLoading: false, errors: null};

    // Registration was successful, save new token and report authentication
    case 'REGISTRATION_SUCCESSFUL':
      localStorage.setItem("token", action.data.token);
      return {...state, ...action.data, isAuthenticated: true, isLoading: false, errors: null};

    case 'AUTHENTICATION_ERROR':
    case 'LOGIN_FAILED':
    // Remove token from redux store on logout, report new authentication status
    case 'LOGOUT_SUCCESSFUL':
      localStorage.removeItem("token");
      return {...state, errors: action.data, token: null, user: null,
        isAuthenticated: false, isLoading: false};

    default:
      return state;
  }
}
