import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#058373',
    justifyContent: "center"    
  },
  content:{
    alignItems: "center"
  },
  title: {   
    marginBottom: 40,
    fontSize: 28,
    fontWeight: 'bold',
    color: "#ffff",
  },
  textButton:{
   fontSize: 20,
   fontWeight: "bold", 
  },
  button:{
    justifyContent: "center",
    alignItems: "center",

    marginTop: 60,
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
  messageView: {
    flexDirection: "row",
    marginTop: 50,
  },
  messageText: {
    color: "#ffff",
    fontSize: 14,
    marginRight: 10
  },
  messageButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold"
  }  

});

export default styles