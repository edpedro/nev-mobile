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
  card: {
    justifyContent: "center",
    alignItems:"center",
    marginTop: 20,    
    marginBottom: 30,
  },
  transactionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 18,
    marginBottom: 5,
  },
});

export default styles