
import { AuthProvider } from "./Auth"

export default function AppProvider({ children }){
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}