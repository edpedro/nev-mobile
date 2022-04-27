import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row', 
    justifyContent: "space-between",
    marginTop: 30,
    padding: 10,  
  },
  contentUser:{
    flexDirection: "row",    
  },
  logouSer:{  
    width: 40,
    height: 40,
    borderRadius: 20, 
    marginLeft: 10,   
  },
  contentUserTitle:{
    marginLeft: 10,
    marginBottom: 20
  },
  UserTitleData:{
    fontSize: 10,
    color: "#ffff",
    marginTop: 5,
    marginBottom: 6
  },
  UserTitleName:{
    fontSize: 18,
    color: "#ffff",
    fontWeight: "bold"
  }, 
})

export default styles