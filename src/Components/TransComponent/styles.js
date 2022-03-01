import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    width: "90%",
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: 'center'    
  }, 
  iconCardCircle:{
    width: 45,
    height: 45,
    backgroundColor: '#E0E6F8',
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    
  },
  content:{
    marginLeft: 10,
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
  circle:{
    marginLeft: 30,
    marginRight: 30
  },
  valueText:{
    fontWeight: "bold"
  },
})

export default styles