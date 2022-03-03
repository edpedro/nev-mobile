import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#058373',
    justifyContent: "center",
    alignItems: "center" 
  },  
  content: {
    marginTop: 30,   
  },
  title: {    
    marginBottom: 20,
    fontSize: 28,
    fontWeight: 'bold',
    color: "#ffff",
    marginLeft: 30
  },
  grid: { 
    flexDirection: "row",   
    marginBottom: 10,
    marginLeft: 60    
  },
  income: {
    width: 100,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20
  },
  incomeTitle: {
    fontWeight: 'bold'
  },
  expense: {
    width: 100,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20
  },
  expenseTitle: {
    fontWeight: 'bold'
  },
  acountCardTitle:{  
    marginLeft: 12,
    marginTop: 8,
    color: "#fff" 
  },
  acountCard: {
    flexDirection: "row",
    alignItems: "flex-start"
  },
  card: {
    width: 60,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: "bold"
  },
  account: {
    width: 60,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center", 
    marginTop: 10  
  },
  accountTitle: {
    fontSize: 10,
    fontWeight: "bold"
  },
  textButton:{
    fontSize: 20,
    fontWeight: "bold"
   },
   button:{
     justifyContent: "center",
     alignItems: "center",
    
     marginLeft: 80,
     marginTop: 40,
     width: 192,
     height: 58,
     borderRadius: 20,
 
     backgroundColor: "#ffff",
     shadowColor: "#000",
     shadowOffset:{
       width: 0,
       height: 12,
     },
     shadowOpacity: 0.58,
     shadowRadius: 16.00,
     elevation: 24,
   },
});

export default styles