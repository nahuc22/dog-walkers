import { Text, View } from 'react-native';
import { BaseToast, ErrorToast } from 'react-native-toast-message';
import { Image } from 'react-native'

export const toastConfig = {

  success: (props) => (
    <BaseToast
        {...props}
    style={{ backgroundColor: 'red' , border: 20 , borderColor: 'white'}}
    text1Style={{
      fontSize: 17,
      color: 'white'
    }}
    text2Style={{
      fontSize: 15
    }}
    />
  ),

  
  error: (props) => (
      <ErrorToast
      {...props}
      style={{ borderLeftColor: 'red', backgroundColor: 'white' }}
      contentContainerStyle={{ paddingHorizontal: 20 }}
      text1Style={{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
      }}
      renderTrailingIcon={() => (
        <Image
          source={require('../../assets/icons/perriti2.png')} // Ruta de tu imagen
          style={{
            width: 100, // Ancho de la imagen
            height: 100, // Alto de la imagen
            marginTop: -22,
            marginRight: 3,
            resizeMode: 'contain', // Asegura que la imagen no se deforme
          }} 
        />
      )}
    />
  ),
        register: (props) => 
        <BaseToast
        {...props}
        style={{ borderLeftColor: 'blue', backgroundColor: 'white' }}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        text1Style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black'
        }}
        renderTrailingIcon={() => (
            <Image
            source={require('../../assets/icons/perrito3.jpg')} // Ruta de tu imagen
            style={{
                width: 100, // Ancho de la imagen
                height: 75, // Alto de la imagen
                marginTop: -10,
                // marginRight: 3,
                resizeMode: 'contain', // Asegura que la imagen no se deforme
            }} 
            />
        )}
        />,

  tomatoToast: ({ text1, props }) => (
    <View style={{ height: 60, width: '75%', backgroundColor: 'red', borderRadius: 10 }}>
      <Text style={{color: 'white', left: 75 , }}>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  )
};
