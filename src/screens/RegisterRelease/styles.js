import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#058373',
    justifyContent: "center",
    
  },  
  content: {
    alignItems: "center",   
  },
  title: {    
    marginBottom: 20,
    fontSize: 28,
    fontWeight: 'bold',
    color: "#ffff",
    alignItems: "center",
    marginTop: 30
  },
  grid: { 
    flexDirection: "row", 
    alignItems: "center",
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
    fontWeight: 'bold',
    color: "#000"
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
    fontWeight: 'bold',
    color: "#000"
  },
  acountCardTitle:{  
    marginLeft: 12,   
    color: "#fff",  
  },
  acountCard: {
    flexDirection: "row",  
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
    marginTop: 5
  },
  cardTitle: {
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

     marginBottom: 10,
     marginTop: 10,  
     width: 192,
     height: 50,
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
   selectedType: {
     backgroundColor: "#81C3BA"
   },
   selectedTypeTitle:{
    color: "#000"
   },
   selectedTypeIcon: {
     
   },
   selectedOperation: {
    backgroundColor: "#D8D8D8"
   },
   ErrorTitle: {
    marginTop: 5, 
    color: '#fff', 
    fontSize: 10,    
  },
  datePickerStyle: {
    width: 230,
  },
});

export default styles