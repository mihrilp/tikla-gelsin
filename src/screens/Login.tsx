import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import useAppNavigation from '../hooks/useAppNavigation';
import {useAppDispatch} from '../hooks/useStore';
import {login} from '../store/user.slice';

const HEADER_HEIGHT = Dimensions.get('window').height * 0.3;

const validEmailRegex = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const handleChange = (field: string, value: string) => {
    setError('');
    switch (field) {
      case 'email':
        setEmail(value);
        if (!validEmailRegex.test(value)) {
          setError('Geçersiz e-posta adresi.');
        }
        break;
      case 'password':
        setPassword(value);
        if (value.length < 7) {
          setError('Şifre en az 7 karakter olmalıdır.');
        }
        break;
      default:
        break;
    }
  };

  const handleLogin = async () => {
    dispatch(login());
    navigation.navigate('Home');
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tıkla Gelsin</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            placeholder="E-posta"
            value={email}
            onChangeText={text => handleChange('email', text)}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Şifre"
            secureTextEntry={true}
            value={password}
            onChangeText={text => handleChange('password', text)}
          />
          <Text style={styles.errorText}>{error}</Text>
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={handleLogin}
          disabled={
            email.length === 0 || password.length === 0 || error.length > 0
          }>
          <Text style={styles.loginText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    backgroundColor: '#EB1730',
    justifyContent: 'flex-end',
    paddingBottom: 25,
  },
  headerText: {
    color: '#fff',
    fontSize: 35,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fafafa',
    paddingHorizontal: 30,
  },
  inputs: {
    width: '100%',
    flexDirection: 'column',
    gap: 20,
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: '#EB1730',
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  loginBtn: {
    height: 50,
    width: '100%',
    backgroundColor: '#EB1730',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#EB1730',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Login;
