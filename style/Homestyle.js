import {StyleSheet,Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  button: {
    borderRadius: 10,
    marginBottom: 40,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: screenWidth * 0.43,
    height: screenHeight * 0.3,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 1,
    elevation: 4,
    shadowColor: 'black',
    justifyContent:'center',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginTop: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default styles