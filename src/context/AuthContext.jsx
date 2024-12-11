import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [idUser, setIdUser] = useState(null);
  const [aut, setAut] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser, aut, setAut, idUser, setIdUser }}>
      {children}
    </AuthContext.Provider>
  );
};