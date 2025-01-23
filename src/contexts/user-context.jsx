import PropTypes from "prop-types";
import { createContext, useEffect, useReducer } from "react";
import { createUserProfileDocument, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.util";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
}

const INITIAL_STATE = {
  currentUser: null
}

export const userReducer = (state, action) => {
  const { type, payload } = action;
  console.log("dispatched");
  console.log(action);

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw Error`Unhandled type of ${type} in userReducer`
  }

}

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  console.log(currentUser);
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  }
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserProfileDocument(user);
      }
      setCurrentUser(user);
    })
    return unsubscribe;
  }, [])
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
}