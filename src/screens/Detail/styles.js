import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#058373',   
  },
  content:{
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 25,
  },
  iconCard:{
    width: 70,
    height: 70,
    backgroundColor: '#E0E6F8',
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30,
    marginBottom: 30
  },
  detailTitle: {
    fontWeight: "bold",
    fontSize: 28
  },
  detailBody:{
    marginLeft: 10,
    alignItems: "center",
    marginTop: 30
  },
  contentTitle:{
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 2
  },
  contentData:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },
  contentCircle:{
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#000",  
    
    marginLeft: 4,
    marginRight: 4,
  
  },
  contentValue:{
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 15,
  },
  iconEditRemove: {
    flexDirection: "row",
    
    margin: 10,
    marginTop: 60,
    marginBottom: 60,
  },
  iconEdit: {
    width: 70,
    height: 70,
    backgroundColor: '#E0E6F8',
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20
  },
  iconRemove:{
    width: 70,
    height: 70,
    backgroundColor: '#E0E6F8',
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20
  },
  goBack:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",      
  },
  goBackTitle: {
    fontSize: 15,
    marginLeft: 5,
  }
});

export default styles