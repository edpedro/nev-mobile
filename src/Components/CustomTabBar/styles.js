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
    marginTop: -30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  }
})

export default styles