import React, { useState } from 'react';
import { View, Text , Button } from 'react-native';
import Label from '../components/Label.jsx'
import { scale } from 'react-native-size-matters';
import { appColors } from '../utils/appColors.js';
import CustomInput from '../components/CustomInput'; 
import Container from '../components/Container.jsx';
import CustomButton from '../components/CustomButton.jsx';
import  {MaterialIcons}  from '@expo/vector-icons';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton.jsx';

export default function Login({setIsLoggedIn }) {
  const navigation = useNavigation();
    const fields = [
      {
        name: "Full Name",
        placeholder: "Full name",
      },
      {
        name: "Email",
        placeholder: "Email",
      },
      {
        name:"Password",
        placeholder: "Password",
        secureTextEntry: true
      }
    ]
    
    const handleLogin = () => {
      setIsLoggedIn(true);
      navigation.navigate('Home');
  };
    const handleSchedule = () => {
      navigation.navigate('Schedule');
  };
    
    return (
      <Container style={{ paddingHorizontal: scale(10)}}>
        <View style={{marginTop: scale(30)}}>
          <BackButton/>
        </View>
        <View style={{paddingVertical:scale(10)}}>
          <Label text="¡Bienvenido!" style={{fontSize: scale(34)}} bold/>
          <Label text="Ingresa tus datos para iniciar" style={{fontSize: scale(17), color: appColors.gray}}/>
        </View> 
        <View>
          {fields.map((field, index) => (
            <View style={{ paddingVertical: scale(5) }} key={field.id || index}>
              <CustomInput {...field} />
            </View>
          ))}
        </View>
        <View style={{ paddingVertical: scale(10) }}>
            {/* Botón de Sign Up */}
            <CustomButton 
                onPress={handleLogin}
                label={"Sign Up"} 
                colors={[appColors.primary, appColors.primaryTwo]}
            />

            <View style={{ paddingVertical: scale(10), justifyContent: 'center', alignItems: 'center' }}>
                <Label text="or" style={{ fontSize: scale(17) }} />
            </View>

            <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 150 }}>

                <CustomButton 
                    iconLeft={<MaterialIcons name="facebook" size={40} color="white" marginRight={scale(10)} marginBottom={scale(3)}/>}
                    onPress={handleSchedule}
                    style={{ flex: 1, width: '100%', marginBottom: scale(17) }} 
                    label={'Connect with Facebook'}
                    labelStyle={{marginRight: scale(15)}} 
                    colors={['#3b5998', '#3b5998']}
                />
                <CustomButton 
                    iconLeft={
                      <View style={{ marginRight: scale(5), alignItems: 'flex-start' }}>
                        <Image 
                            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/010/353/285/large_2x/colourful-google-logo-on-white-background-free-vector.jpg' }} 
                            style={{ width: 40, height: 40, marginRight: scale(7) }} 
                            />
                      </View>
                    }
                    style={{ width: '100%', flex: 1 }} 
                    label={'Connect with Google'}
                    labelStyle={{ color: 'black' , marginRight: scale(35) }} 
                    colors={['#ffffff', '#ffffff']} 
                    borderColor={'lightblue'}
                />
            </View>
        </View>

        <View style={{ paddingVertical: scale(7), justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
  
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <Label text="By signing in, I agree with" style={{ fontSize: scale(11), color: appColors.gray }} />
          <Label text=" Terms of Use" style={{ fontSize: scale(13) }} />
          <Label text=" and " style={{ fontSize: scale(11), color: appColors.gray }} />
        </View>

        <Label text="Privacy Policy" style={{ fontSize: scale(13) }} />
        
      </View>
      </Container>
    );
  }