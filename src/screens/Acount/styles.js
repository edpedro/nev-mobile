import { Inter_100Thin } from '@expo-google-fonts/inter';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#058373',   
  },
  content:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  contentPhoto: {
    marginTop: 60,
    flexDirection: "row"
  },
  imgUser: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#E0E6F8',

    justifyContent: "center",
    alignItems: "center"
  },
  logouSer: {
    width: 300,
    height: 300,
    borderRadius: 150,  
  },
  exitIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  exit: {
    width: 100,
    height: 100,
    backgroundColor: '#E0E6F8',
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20
  },  
  goBack:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",      
  },
  goBackTitle: {
    fontSize: 15,
  }
});

export default styles