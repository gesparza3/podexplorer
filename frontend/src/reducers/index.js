import { combineReducers } from 'redux';
import podcasts from "./podcasts";
import auth from "./auth";

const podexplorer = combineReducers({
  podcasts, auth,
})

export default podexplorer;
