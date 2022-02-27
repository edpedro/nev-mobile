import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row', 
    justifyContent: "space-between",
    marginTop: 50,
    padding: 20,  
  },
  contentUser:{
    flexDirection: "row",    
  },
  logouSer:{
    width: 80,
    height: 80,
  },
  contentUserTitle:{
    marginLeft: -10,
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