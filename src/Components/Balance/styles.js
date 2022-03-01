import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
   flexDirection: 'row',
   justifyContent: "space-evenly",
   marginTop: -15,
  },
  income: {
    width: 100,
    height: 52,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset:{
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  incomeTitle: {},
  incomeValue: {
    fontWeight: "bold", 
  },
  expense: {
    width: 100,
    height: 52,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",

    shadowOffset:{
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  }, 
  expenseValue: {
    fontWeight: "bold",    
  },
  ContentBalance: {
    width: 100,
    height: 52,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",

    shadowOffset:{
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  ContentBalanceValue: {
    fontWeight: "bold",  
  },
})

export default styles