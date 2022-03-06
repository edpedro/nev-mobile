import { createContext } from 'react'

const AuthContext = createContext()

export default function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}