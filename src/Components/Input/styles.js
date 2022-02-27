import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {  
   width: "100%",
   marginLeft: 90,
   margin: 10,    
  },
  title: {
    color: "#ffff",
    marginBottom: 5,
  },
  input: {    
    width: 335,
    height: 50,
    borderRadius: 10,
    padding: 10, 

    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
});

export default styles