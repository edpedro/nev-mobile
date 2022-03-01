import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {  
    width: 260,
    height: 130,
    backgroundColor: '#058373',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 5,
    marginTop: 20,
  },
  contentHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    marginTop: 5
  },
  headerTitle: {
    fontWeight: "bold",
    color:"#fff",
    fontSize: 12
  },
  headerData:{
    color:"#fff",
    fontSize: 10
  },
  contentBody:{
    marginTop: 10,
    marginBottom: 10
  },
  invoice:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5
  },
  invoiceTitle:{
    color:"#fff",
  },
  invoiceValue:{
    fontWeight: "bold",
    color:"#fff",
  },
  limit:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  limitTitle:{
    color:"#fff",
  },
  limitValue:{
    fontWeight: "bold",
    color:"#fff",
  },
  viewInvoice:{
    marginLeft: 8
  },
  viewInvoiceText:{
    fontWeight: "bold",
    color:"#fff",
  },
})

export default styles