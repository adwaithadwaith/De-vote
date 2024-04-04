import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, { user: null });

  const login = (userData) => {
    localStorage.setItem('jwt', JSON.stringify(userData.token)); // Assuming userData has a token property
    dispatch({ type: 'LOGIN', payload: userData });
  };

  const logout = () => {
    localStorage.removeItem('jwt');
    dispatch({ type: 'LOGOUT' });
  };

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      // Here, you might want to verify the JWT or fetch user details
      const userData = { token: jwt }; // Simplified, ideally fetch user data
      dispatch({ type: 'LOGIN', payload: userData });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
