import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  signupText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  },
  signinText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color:'blue',
    fontFamily: 'Times New Roman',
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'whitesmoke',
    borderRadius: 15,
    padding: 20,
    elevation: 6,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'black',
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3,
  },
});
export default styles;
