import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#058373',   
  },
  content:{
    flex: 1,   
    backgroundColor: "#ffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 10,
  },
  contentBody: {
    alignItems: "center"
  },
  iconCard:{
    width: 70,
    height: 70,
    backgroundColor: '#E0E6F8',
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30,
    marginBottom: 20
  },
  filter:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",

    marginTop: -40,
    marginBottom: 70
  },
  detailTitle: {
    fontWeight: "bold",
    fontSize: 28
  },
  detailBody:{
    marginTop: 10,
    marginBottom: 20
  },
  contentTitle:{
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 25
  },
  contenInvoice:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 2,
    marginBottom: 10
  },
  invoiceValue: {
    fontWeight: "bold"
  },
  contentLimit:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 2,
    marginBottom: 5
  },
  limitValue: {
    fontWeight: "bold"
  },
  iconEditRemove: {
    flexDirection: "row",    
    margin: 10,
    marginTop: 10, 
    marginBottom: 15,
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
  transaction: {
    marginRight: 20
  },
  notRelease: {
    marginTop: 60,
    alignItems: 'center'
  },
  notReleaseTitle: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default styles