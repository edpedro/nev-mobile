import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#058373"
  },
  title: {    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"  
  }, 
  titleName:{
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold"
  }, 
  content: { 
    flex: 1,
    backgroundColor: "#ffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 25,
  },
  balance: {
    marginTop: 60,    
    marginBottom: 60,
  },
  filter: {
    marginTop: -50
  },
  transactionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 18,
    marginBottom: 10,
    marginTop: 15
  },
});

export default styles