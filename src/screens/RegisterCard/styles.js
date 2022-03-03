import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#058373',
    justifyContent: "center", 
  },
  content:{
    alignItems: "center",
    marginTop: 60
  },
  title: {    
    marginBottom: 20,
    fontSize: 28,
    fontWeight: 'bold',
    color: "#ffff",
  },
  textButton:{
    fontSize: 20,
    fontWeight: "bold"
   },
   button:{
     justifyContent: "center",
     alignItems: "center",
 
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