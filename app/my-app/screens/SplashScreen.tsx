import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';


const SplashScreen = ({navigation}:any) => {
    const { colors } = useTheme();
    
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
            source={require('../assets/landingText.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: colors.text
            }]}>Welcome to Tesco Plan and Go</Text>
            
            <Text style={styles.text}>Sign in with an account</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>

                <Text style={styles.textSignIn}>Sign in</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.button2}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>

                <Text style={styles.textSignUp}>Sign up</Text>
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#1E539A'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: '#003f5c',
      marginTop: 10,
      fontSize :16
  },
  button: {
    borderRadius:50,
    backgroundColor:'#1E539A',
    marginTop:20,
    height:50,
    width:250,
    justifyContent:'center',
    alignSelf:'flex-start',
    marginRight:250
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
      
  },
  textSignIn: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
  },
  button2: {
    borderRadius:50,
    borderWidth:2,
    //backgroundColor:'white',
    borderColor: '#1E539A',
    marginTop:20,
    height:50,
    width:250,
    justifyContent:'center',
    alignSelf:'flex-start',
    marginRight:250
  },

  textSignUp: {
    color: '#1E539A',
    fontWeight: 'bold',
    textAlign: 'center',
},

});