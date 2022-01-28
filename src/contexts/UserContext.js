import { createContext, useContext } from "react";

const UserContext = createContext({
  auth: null,
  user: null,
  signOut: () => {},
  setUser: () => {},
  initUser: () => {},
});

function useUser() {
  return useContext(UserContext);
}

export { UserContext, useUser };
