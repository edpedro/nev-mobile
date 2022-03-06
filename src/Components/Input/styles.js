import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
   marginLeft: 10,
   margin: 10,    
  },
  title: {
    color: "#ffff",
    marginBottom: 5,
  },
  input: {    
    width: 335,
    height: 50,
    borderRadius: 5,
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
  ErrorTitle: {
    marginTop: 5, 
    color: '#fff', 
    fontSize: 10,    
  }
});

export default styles