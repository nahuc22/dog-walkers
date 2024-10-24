import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';

const BackButton = ({style}) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('OnBoarding')} style={[style]}>
        <MaterialIcons name="arrow-back" size={25} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({

});
export default BackButton;