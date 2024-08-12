import { createContext } from "react";
const userContext = createContext({
    loggedIn: "Default User",
});

export default userContext;