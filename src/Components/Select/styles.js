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
  selectArea: {
    flexDirection: 'row', 
    width: '100%',
    height: 50,
    borderRadius: 5,
 

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
  select: {
    width: '90%',
    height: 50,   
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center"
  },
  selectText: {
    paddingLeft: 10, 
   
    alignItems: "center"
  },
  modal:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    paddingHorizontal: 12,
    marginTop: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 12
  },
  modalText:{
    fontWeight: "bold"
  },
  optionContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    padding: 10,
  },
  optionText:{
    fontSize: 16,
    color: "#555",
  },
  ErrorTitle: {
    marginTop: 5, 
    color: '#fff', 
    fontSize: 10, 
  }
});

export default styles