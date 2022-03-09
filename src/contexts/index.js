
import { AuthProvider } from "./Auth"
import { CreditCardProvider } from './CreditCard'

export default function AppProvider({ children }){
  return (
    <AuthProvider>
      <CreditCardProvider>
        {children}
      </CreditCardProvider>      
    </AuthProvider>
  )
}