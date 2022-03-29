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
  inputArea: {
    flexDirection: 'row',
    alignItems: "center",
    width: '95%',
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
  input: {  
    width: '95%',
    height: 50,   
  },
  icon:{
    width: '15%',
    height: 50,
    justifyContent: "center",
    alignItems: "center",   
  },
  ErrorTitle: {
    marginTop: 5, 
    color: '#fff', 
    fontSize: 10,    
  }
});

export default styles