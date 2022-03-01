import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center',    
  },  
  button:{
    justifyContent: "center",
    alignItems: "center",

    marginTop: 30,
    width: 260,
    height: 60,
    borderRadius: 20,

    backgroundColor: "#058373",
    shadowColor: "#fff",
    shadowOffset:{
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  textButton:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
   },
});

export default styles