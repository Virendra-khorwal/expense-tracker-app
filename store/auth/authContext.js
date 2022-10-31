import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useReducer } from "react";

const auth = getAuth();

export const AuthContext = createContext({
  createUser: (auth, email, password) => {},
  signIn: (auth, email, password) => {},
  signOut: (auth) => {},
});

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            
          })
          .catch((error) => {
            console.log(error)
          });

    case "SIGNIN":
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            console.log(error)
          });

    case "SIGNOUT":
        signOut(auth)
          .then(() => {
            console.log("Sign Out Successful")
          })
          .catch((error) => {
            console.log(error)
          });
  }
};

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, []);

  const createUser = ({ ...authData }) => {
    dispatch({ type: "SIGNUP", payload: authData });
  };

  const signIn = ({ ...authData }) => {
    dispatch({ type: "SIGNIN", payload: authData });
  };

  const signOut = (auth) => {
    dispatch({ type: "SIGNOUT", payload: auth });
  };

  const value = {
    createUser: createUser,
    signIn: signIn,
    signOut: signOut,
  }

  return (
    <AuthContext.Provider value={value} >
        {children}
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;



