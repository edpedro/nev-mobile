import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{ 
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center", 
    margin: 30,
  },
  content: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",  
  },
  contentBody: {
   flexDirection: "row",
  },
  iconCardCircle:{
    width: 45,
    height: 45,
    backgroundColor: '#E0E6F8',
    borderRadius: 22,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",    
  }, 
  contentTitle:{
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 2
  },
  contentData:{
    flexDirection: "row", 
    marginTop: 2,
  }, 
  contentCircle:{
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#000",  
    
    marginLeft: 4,
    marginRight: 4,
    marginTop: 8
  },
  circle:{    
    marginTop: 15
  },
  valueText:{
    fontWeight: "bold",
  },
  })

export default styles