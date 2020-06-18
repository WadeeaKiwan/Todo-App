import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import todoReducer from "./reducers/todoReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  todo: todoReducer
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
