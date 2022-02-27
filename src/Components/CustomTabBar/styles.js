import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
   height: 50,
  backgroundColor: "#fff",
   flexDirection: 'row'
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  tabItemCenter: {
    width: 60,
    height: 60,
    backgroundColor: "#058373",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30
  }
})

export default styles