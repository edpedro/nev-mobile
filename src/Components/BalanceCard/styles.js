import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5
  }, 
  balanceCard: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#058373",

    justifyContent: "center",
    alignItems: "center",

    padding: 5,
    marginRight: 8,
  },
  balanceCardName:{
    fontWeight: "bold",
    fontSize: 10
  },
  balanceCardValue:{
    fontSize: 12,   
  },
  expenseCard: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#058373",

    justifyContent: "center",
    alignItems: "center",

    padding: 5,
    marginLeft: 8,
  },
  expenseCardName:{
    fontWeight: "bold",
    fontSize: 10
  },
  expenseCardValue:{
    fontSize: 12, 
  }
});

export default styles