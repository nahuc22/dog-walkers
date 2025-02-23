import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { scale } from 'react-native-size-matters';
import Label from '../components/Label';
import * as Animatable from 'react-native-animatable';
import Container from '../components/Container';
import { clearPersistedState } from '../redux/store/Store';

export default function OnBoarding({ navigation }) {

  const _onLogout = async () => {
    await handleLogout();
    navigation?.navigate("Login");
  };

  const slides = [
    {
      key: 'one',
      title: 'App for dog-walkers',
      text: '\nThere’s something for everyone. This is an application to be able to make the connection between dog-walkers and \nusers who need to hire services for this.',
      image: require('../../assets/img-1.png'), // Imagen local
    },
  ];

  const _renderItem = ({ item }) => {
    const imageSource = typeof item.image === 'string'
      ? { uri: item.image } // Imagen remota
      : item.image; // Imagen local (require)

    return (
      <View style={styles.slide}>
        {/* Imagen de fondo */}
        <Image
          style={styles.backgroundImage} // Hace que la imagen cubra todo el contenedor
          resizeMode="cover"
          source={imageSource}
        />
        <Animatable.View animation={'bounceIn'} style={styles.textContainer}>
          <Label text={item.title} style={styles.title} bold />
          <Label text={item.text} style={styles.text} />
        </Animatable.View>
      </View>
    );
  };

  const _onDone = () => {
    navigation?.navigate("Login");
  };

  return (
    <Container>
      <AppIntroSlider
        dotStyle={styles.buttonCircle}
        activeDotStyle={styles.activeButton}
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        showSkipButton
        renderDoneButton={() => <Label text={'Done'} style={styles.btn} />}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
    backgroundImage: {
      width: '100%', 
      height: '100%',
    },
    textContainer: {
        position: 'absolute',
        bottom: scale(45), // Coloca el contenedor cerca del fondo
        left: scale(26),
        right: scale(20),
        alignItems: 'center',
        paddingVertical: scale(20),
    },
    title: {
      fontSize: scale(18),
      color: '#fff'// Color del texto
    },
    text: {
      fontSize: scale(13),
      color: '#fff', // Color del texto
    },
    btn: {
        color: '#fff',
      marginTop: scale(10),
      fontSize: scale(15),
    },
  });
  