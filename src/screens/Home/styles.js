import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#058373',
  },
  content: {
    flex: 1,
    backgroundColor: "#ffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 25,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 18,
    marginTop: 15,
  }, 
  card: {
    alignItems: "center"
  }, 
  transactionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 18,
    marginTop: 30,
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